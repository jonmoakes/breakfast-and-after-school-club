import { useDispatch, useSelector } from "react-redux";
import { useElements, useStripe } from "@stripe/react-stripe-js";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { selectWalletFundsToAddSelectors } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { getClientSecretAsync } from "../../../store/handle-payment/handle-payment.thunks";

const useGetClientSecretThunk = () => {
  const { stripeSecretKey } = useGetCurrentUserSelectors();
  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const getClientSecretThunk = () => {
    if (!stripe || !elements) return;
    dispatch(getClientSecretAsync({ stripeSecretKey, walletFundsToAdd }));
  };

  return { getClientSecretThunk };
};

export default useGetClientSecretThunk;
