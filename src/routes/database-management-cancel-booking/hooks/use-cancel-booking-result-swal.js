import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useCancelBookingSuccessSwal from "./swals/use-cancel-booking-success-swal";
import useCancelBookingFirstThunkFailedSwal from "./swals/use-cancel-booking-first-thunk-failed-swal";
import useCancelBookingSessionSpacesFulfilledDeleteDocFailedSwal from "./swals/use-cancel-booking-session-spaces-fulfilled-delete-doc-failed-swal";
import useCancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal from "./swals/use-cancel-booking-update-balance-fulfilled-update-session-spaces-failed-swal";
import useCancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledDeleteDocFailedSwal from "./swals/use-cancel-booking-update-balance-fulfilled-update-session-spaces-fulfilled-delete-doc-failed-swal";

const useCancelBookingResultSwal = () => {
  const {
    deleteDocumentResult,
    deleteDocumentError,
    updateBalanceResult,
    updateBalanceError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
    userOfAppChoice,
  } = useGetDatabaseManagementSelectors();

  const { cancelBookingSuccessSwal } = useCancelBookingSuccessSwal();
  const { cancelBookingFirstThunkFailedSwal } =
    useCancelBookingFirstThunkFailedSwal();
  const { cancelBookingSessionSpacesFulfilledDeleteDocFailedSwal } =
    useCancelBookingSessionSpacesFulfilledDeleteDocFailedSwal();
  const { cancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal } =
    useCancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal();
  const {
    cancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledDeleteDocFailedSwal,
  } =
    useCancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledDeleteDocFailedSwal();

  useEffect(() => {
    if (
      !deleteDocumentResult &&
      !deleteDocumentError &&
      !updateBalanceResult &&
      !updateBalanceError &&
      !updateSessionSpacesResult &&
      !updateSessionSpacesError
    )
      return;

    if (
      (userOfAppChoice === "non user" &&
        updateSessionSpacesResult === "fulfilled" &&
        deleteDocumentResult === "fulfilled") ||
      (userOfAppChoice === "user" &&
        deleteDocumentResult === "fulfilled" &&
        updateBalanceResult === "fulfilled" &&
        updateSessionSpacesResult === "fulfilled")
    ) {
      cancelBookingSuccessSwal();
    } else if (
      (userOfAppChoice === "non user" &&
        updateSessionSpacesResult === "rejected") ||
      (userOfAppChoice === "user" && updateBalanceResult === "rejected")
    ) {
      cancelBookingFirstThunkFailedSwal();
    } else if (
      userOfAppChoice === "non user" &&
      updateSessionSpacesResult === "fulfilled" &&
      deleteDocumentResult === "rejected"
    ) {
      cancelBookingSessionSpacesFulfilledDeleteDocFailedSwal();
    } else if (
      userOfAppChoice === "user" &&
      updateBalanceResult === "fulfilled" &&
      updateSessionSpacesResult === "rejected"
    ) {
      cancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal();
    } else if (
      userOfAppChoice === "user" &&
      updateBalanceResult === "fulfilled" &&
      updateSessionSpacesResult === "fulfilled" &&
      deleteDocumentResult === "rejected"
    ) {
      cancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledDeleteDocFailedSwal();
    }
  }, [
    deleteDocumentResult,
    deleteDocumentError,
    updateBalanceError,
    updateBalanceResult,
    updateSessionSpacesError,
    updateSessionSpacesResult,
    userOfAppChoice,
    cancelBookingSuccessSwal,
    cancelBookingFirstThunkFailedSwal,
    cancelBookingSessionSpacesFulfilledDeleteDocFailedSwal,
    cancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal,
    cancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledDeleteDocFailedSwal,
  ]);
};

export default useCancelBookingResultSwal;
