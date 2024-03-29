import useGetCardInputResultSelectors from "../../../hooks/get-selectors/use-get-card-input-result-selectors";
import useGetHandlePaymentSelectors from "../../../hooks/get-selectors/use-get-handle-payment-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

const useShouldShowAddFundsButton = () => {
  const { showPrePayButton } = useGetCardInputResultSelectors();
  const { client_secret } = useGetHandlePaymentSelectors();
  const { walletFundsToAdd } = useGetCurrentUserSelectors();

  const shouldShowAddFundsButton = () => {
    return showPrePayButton && !client_secret && walletFundsToAdd
      ? true
      : false;
  };

  return { shouldShowAddFundsButton };
};

export default useShouldShowAddFundsButton;
