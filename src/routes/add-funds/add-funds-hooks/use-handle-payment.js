import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";

import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { startPaymentIsProcessing } from "../../../store/card-input-result/card-input-result.slice";

import useHandlePaymentSucceeded from "./use-handle-payment-succeeded";
import useHandlePaymentErrors from "./use-handle-payment-errors.component";

const useHandlePayment = () => {
  const { handlePaymentSucceeded } = useHandlePaymentSucceeded();

  const { handlePaymentResultError, handleCatchError } =
    useHandlePaymentErrors();

  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);
  const currentUser = useSelector(selectCurrentUser);

  const { name, email } = currentUser;

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const handlePayment = async () => {
    if (!stripe || !elements) return;
    dispatch(startPaymentIsProcessing());

    try {
      const cardElement = elements.getElement("card");
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: Math.round(walletFundsToAdd * 100) }),
        }
      ).then((res) => res.json());

      const {
        paymentIntent: { client_secret },
      } = response;

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name,
            email,
          },
        },
      });
      if (paymentResult.error) {
        handlePaymentResultError(paymentResult, cardElement);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        handlePaymentSucceeded(cardElement);
      }
    } catch (error) {
      handleCatchError(error);
    }
  };

  return { handlePayment };
};

export default useHandlePayment;
