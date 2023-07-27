import { useDispatch } from "react-redux";

import { setWalletFundsToAdd } from "../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

const useHandleAddWalletFundsChange = () => {
  const dispatch = useDispatch();

  const handleAddWalletFundsChange = (event) => {
    dispatch(setWalletFundsToAdd(Number(event.target.value)));
  };

  return { handleAddWalletFundsChange };
};

export default useHandleAddWalletFundsChange;
