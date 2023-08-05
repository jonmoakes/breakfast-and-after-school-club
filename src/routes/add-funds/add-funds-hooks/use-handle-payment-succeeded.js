import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { databases } from "../../../utils/appwrite/appwrite-config";

import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { clearWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import {
  clearCardInputResult,
  stopPaymentIsProcessing,
} from "../../../store/card-input-result/card-input-result.slice";

import {
  accountRoute,
  fundsAddedMessage,
  paymentSucceededButDatabaseUpdateErrorMessage,
  uploadFundsDatabaseErrorInstructions,
} from "../../../strings/strings";
import useFireSwal from "../../../hooks/use-fire-swal";

const useHandlePaymentSucceeded = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  const { name, email } = currentUser;

  const handlePaymentSucceeded = async (cardElement) => {
    try {
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
      navigate(accountRoute);
    } catch (error) {
      dispatch(stopPaymentIsProcessing());
      cardElement.clear();
      fireSwal(
        "error",
        paymentSucceededButDatabaseUpdateErrorMessage,
        uploadFundsDatabaseErrorInstructions(error, walletFundsToAdd),
        0,
        true,
        false
      );
      dispatch(clearWalletFundsToAdd());
    }
  };

  return {
    handlePaymentSucceeded,
  };
};

export default useHandlePaymentSucceeded;
