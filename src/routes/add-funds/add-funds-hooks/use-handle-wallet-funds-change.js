// import { useDispatch } from "react-redux";

// import { setWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

// const useHandleWalletFundsChange = () => {
//   const dispatch = useDispatch();

//   const handleWalletFundsChange = (event) => {
//     dispatch(setWalletFundsToAdd(Number(event.target.value)));
//   };

//   return { handleWalletFundsChange };
// };

// export default useHandleWalletFundsChange;

import { useDispatch } from "react-redux";
import { setWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

const useHandleWalletFundsChange = () => {
  const dispatch = useDispatch();

  const handleWalletFundsChange = (event) => {
    const enteredValue = event.target.value;

    const pattern = /^(\d*\.?\d*)$/;
    if (!pattern.test(enteredValue)) {
      return; // Invalid pattern (non-digit characters or incorrect decimal format)
    }

    const value = parseFloat(enteredValue); // Parse decimal values

    // Enforce a maximum value of 100
    const clampedValue = Math.min(value, 100);

    dispatch(setWalletFundsToAdd(clampedValue));
  };

  return { handleWalletFundsChange };
};

export default useHandleWalletFundsChange;
