import { useSelector, useDispatch } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import { selectWalletFundsToAddSelectors } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

import { getClientSecretAsync } from "../../../store/handle-payment/handle-payment.thunks";

const useGetClientSecret = () => {
  const { currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);

  const { stripeSecretKey } = currentUserEnvironmentVariables;

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const getClientSecret = () => {
    if (!stripe || !elements) return;
    dispatch(getClientSecretAsync({ stripeSecretKey, walletFundsToAdd }));
  };

  return { getClientSecret };
};

export default useGetClientSecret;
