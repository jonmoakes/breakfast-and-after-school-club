import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { databases } from "../../../../utils/appwrite/appwrite-config";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { selectWalletFundsToAdd } from "../../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { clearWalletFundsToAdd } from "../../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { selectCurrentUser } from "../../../../store/user/user.selector";
import {
  startPaymentIsProcessing,
  stopPaymentIsProcessing,
  clearCardInputResult,
} from "../../../../store/card-input-result/card-input-result.slice";

import {
  errorSubmittingPaymentMessage,
  fundsAddedMessage,
} from "../../../../strings/strings";

const useHandlePayment = () => {
  const { fireSwal } = useFireSwal();

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
        dispatch(stopPaymentIsProcessing());
        dispatch(clearWalletFundsToAdd());
        fireSwal(
          "error",
          errorSubmittingPaymentMessage,
          paymentResult.error.message,
          0,
          true,
          false
        );
        cardElement.clear();
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        const walletBalanceFromDatabase = await databases.getDocument(
          import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
          import.meta.env.VITE_USER_COLLECTION_ID,
          currentUser.id
        );

        const { walletBalance } = walletBalanceFromDatabase;

        await databases.updateDocument(
          import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
          import.meta.env.VITE_USER_COLLECTION_ID,
          currentUser.id,
          {
            walletBalance: walletBalance + Math.round(walletFundsToAdd * 100),
          }
        );
        dispatch(stopPaymentIsProcessing());
        dispatch(clearWalletFundsToAdd());
        dispatch(clearCardInputResult());
        fireSwal(
          "success",
          `thank you ${name}`,
          fundsAddedMessage(email),
          5000,
          true,
          true
        );
        cardElement.clear();
      }
    } catch (error) {
      dispatch(stopPaymentIsProcessing());
      dispatch(clearWalletFundsToAdd());

      fireSwal("error", error.message, "", 0, true, false);
    }
  };

  return { handlePayment };
};

export default useHandlePayment;
