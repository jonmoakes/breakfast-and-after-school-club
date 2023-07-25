import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { databases } from "../../../../utils/appwrite/appwrite-config";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { selectWalletFunds } from "../../../../store/wallet/wallet.selector";
import { selectCurrentUser } from "../../../../store/user/user.selector";
import {
  startPaymentIsProcessing,
  stopPaymentIsProcessing,
  clearCardInputResult,
} from "../../../../store/card-input-result/card-input-result.slice";

import { errorSubmittingPaymentMessage } from "../../../../strings/strings";
import { clearWalletFunds } from "../../../../store/wallet/wallet.slice";

const useHandlePayment = () => {
  const { fireSwal } = useFireSwal();

  const walletFunds = useSelector(selectWalletFunds);
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
          body: JSON.stringify({ amount: Math.round(walletFunds * 100) }),
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
            walletBalance: walletBalance + Math.round(walletFunds * 100),
          }
        );
        dispatch(stopPaymentIsProcessing());
        dispatch(clearWalletFunds());
        dispatch(clearCardInputResult());
        fireSwal(
          "success",
          `thank you ${name}`,
          `The funds have been added to your wallet and A Confirmation Email Has Been Sent To ${email}.`,
          5000,
          true,
          true
        );
        cardElement.clear();
      }
    } catch (error) {
      dispatch(stopPaymentIsProcessing());
      fireSwal("error", error.message, "", 0, true, false);
    }
  };

  return { handlePayment };
};

export default useHandlePayment;
