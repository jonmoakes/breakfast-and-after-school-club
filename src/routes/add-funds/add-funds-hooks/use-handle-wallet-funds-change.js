import { useDispatch } from "react-redux";

import { setWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

const useHandleWalletFundsChange = () => {
  const dispatch = useDispatch();

  const handleWalletFundsChange = (event) => {
    dispatch(setWalletFundsToAdd(Number(event.target.value)));
  };

  return { handleWalletFundsChange };
};

export default useHandleWalletFundsChange;
