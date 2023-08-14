// import { useDispatch } from "react-redux";
// import { setWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

// const useHandleWalletFundsChange = () => {
//   const dispatch = useDispatch();

//   const handleWalletFundsChange = (event) => {
//     const enteredValue = event.target.value;

//     const pattern = /^\d*$/;
//     if (!pattern.test(enteredValue)) {
//       return; // Invalid pattern (non-digit characters)
//     }

//     const value = Number(enteredValue, 10);
//     if (value > 100) {
//       return;
//     }

//     dispatch(setWalletFundsToAdd(value));
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

    const value = parseFloat(enteredValue); // Parse decimal values

    // Handle cases where value is NaN or exceeds a limit
    if (isNaN(value) || value > 100) {
      return;
    }

    dispatch(setWalletFundsToAdd(value));
  };

  return { handleWalletFundsChange };
};

export default useHandleWalletFundsChange;
