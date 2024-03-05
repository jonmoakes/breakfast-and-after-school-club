import { useDispatch } from "react-redux";
import { setWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

const useHandleWalletFundsChange = () => {
  const dispatch = useDispatch();

  const handleWalletFundsChange = (event) => {
    const enteredValue = event.target.value;

    const value = Number(enteredValue, 10);
    if (value > 200) {
      return;
    }

    dispatch(setWalletFundsToAdd(value));
  };

  return { handleWalletFundsChange };
};

export default useHandleWalletFundsChange;
