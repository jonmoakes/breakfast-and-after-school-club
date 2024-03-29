import useCurrentUserActions from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";

const useHandleWalletFundsChange = () => {
  const { dispatchSetWalletFundsToAdd } = useCurrentUserActions();

  const handleWalletFundsChange = (event) => {
    const enteredValue = event.target.value;

    const value = Number(enteredValue, 10);
    if (value > 200) {
      return;
    }

    dispatchSetWalletFundsToAdd(value);
  };

  return { handleWalletFundsChange };
};

export default useHandleWalletFundsChange;
