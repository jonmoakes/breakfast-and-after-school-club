import { useDispatch } from "react-redux";

import { setWalletFunds } from "../../store/wallet/wallet.slice";

const useHandleAddWalletFundsChange = () => {
  const dispatch = useDispatch();

  const handleAddWalletFundsChange = (event) => {
    dispatch(setWalletFunds(Number(event.target.value)));
  };

  return { handleAddWalletFundsChange };
};

export default useHandleAddWalletFundsChange;
