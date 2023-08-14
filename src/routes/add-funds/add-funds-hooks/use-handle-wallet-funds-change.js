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

    // Allow digits, a single optional decimal point, and up to 2 decimal places
    const pattern = /^(\d*\.?\d{0,2})$/;
    if (!pattern.test(enteredValue)) {
      return; // Invalid pattern (non-digit characters or incorrect format)
    }

    const value = parseFloat(enteredValue); // Parse decimal values

    // Enforce maximum values
    const clampedValue = Math.min(value, 100.0, 99.99);

    dispatch(setWalletFundsToAdd(Number(clampedValue)));
  };

  return { handleWalletFundsChange };
};

export default useHandleWalletFundsChange;
