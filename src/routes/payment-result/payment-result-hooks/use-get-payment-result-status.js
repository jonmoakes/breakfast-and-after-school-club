import { useEffect } from "react";

import useGetHandlePaymentSelectors from "../../../hooks/get-selectors/use-get-handle-payment-selectors";
import useAddWalletFundsToDatabaseAndThenGetUsersWalletBalanceThunks from "../../../hooks/get-actions-and-thunks/handle-payment-actions-and-thunks/use-add-wallet-funds-to-database-and-then-get-users-wallet-balance-thunks";
import useHandlePaymentFailed from "./use-handle-payment-failed";

const useGetPaymentResultStatus = () => {
  const { paymentResultObject } = useGetHandlePaymentSelectors();
  const { addWalletFundsToDatabaseAndThenGetUsersWalletBalanceThunks } =
    useAddWalletFundsToDatabaseAndThenGetUsersWalletBalanceThunks();
  const { handlePaymentFailed } = useHandlePaymentFailed();

  // payment result is an object initially when fulfilled, which we get the status off. Then, addWalletFundsToDatabaseAsync starts which turns the paymentResult in the reducer to an empty object. Therefore the status from the paymentResult is now undefined.
  const paymentResultStatus =
    paymentResultObject?.paymentIntent?.status === undefined
      ? undefined
      : paymentResultObject.paymentIntent.status;

  // payment result will be either succeeded or failed here, so will either attempt to update the wallet balance or show the failed swal. If failed, paymentResult will be an empty object ( as in failure, the reducer does not update the paymentResult from its initital empty object ) so will return. If succeeded, as soon as addWalletFundsToDatabaseAsync is pending, paymentResult will be again be turned into an empty object in the reducer so will prevent useEffect running again.
  useEffect(() => {
    if (!Object.keys(paymentResultObject).length) return;

    if (paymentResultStatus === "succeeded") {
      addWalletFundsToDatabaseAndThenGetUsersWalletBalanceThunks();
    } else {
      handlePaymentFailed();
    }
  }, [
    handlePaymentFailed,
    paymentResultObject,
    paymentResultStatus,
    addWalletFundsToDatabaseAndThenGetUsersWalletBalanceThunks,
  ]);
};

export default useGetPaymentResultStatus;
