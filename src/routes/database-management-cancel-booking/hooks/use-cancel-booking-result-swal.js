import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";
import useCancelBookingSuccessSwal from "./swals/use-cancel-booking-success-swal";

import useCancelBookingFailedSwal from "./swals/use-cancel-booking-failed-swal";
import useBookingCancelledBalanceUpdateFailedSwal from "./swals/use-booking-cancelled-balance-update-failed-swal";
import useBookingCancelledBalanceUpdatedSessionSpacesFailedSwal from "./swals/use-booking-cancelled-balance-updated-session-spaces-failed-swal";
import useBookingCancelledSessionSpacesUpdateFailedSwal from "./swals/use-booking-cancelled-session-spaces-update-failed-swal";

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
  const {
    dispatchResetDeleteDocumentResult,
    dispatchResetDeleteDocumentError,
    dispatchResetDataToUpdateDocument,
  } = useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { cancelBookingSuccessSwal } = useCancelBookingSuccessSwal();
  const { cancelBookingFailedSwal } = useCancelBookingFailedSwal();
  const { bookingCancelledBalanceUpdateFailedSwal } =
    useBookingCancelledBalanceUpdateFailedSwal();
  const { bookingCancelledBalanceUpdatedSessionSpacesFailedSwal } =
    useBookingCancelledBalanceUpdatedSessionSpacesFailedSwal();
  const { bookingCancelledSessionSpacesUpdateFailedSwal } =
    useBookingCancelledSessionSpacesUpdateFailedSwal();

  const { fireSwal } = useFireSwal();

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
      (userOfAppChoice === "user" &&
        deleteDocumentResult === "fulfilled" &&
        updateBalanceResult === "fulfilled" &&
        updateSessionSpacesResult === "fulfilled") ||
      (userOfAppChoice === "non user" &&
        deleteDocumentResult === "fulfilled" &&
        updateSessionSpacesResult === "fulfilled")
    ) {
      cancelBookingSuccessSwal();
    } else if (deleteDocumentResult === "rejected") {
      cancelBookingFailedSwal();
    } else if (
      userOfAppChoice === "user" &&
      deleteDocumentResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
      bookingCancelledBalanceUpdateFailedSwal();
    } else if (
      userOfAppChoice === "user" &&
      deleteDocumentResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      updateSessionSpacesResult === "rejected"
    ) {
      bookingCancelledBalanceUpdatedSessionSpacesFailedSwal();
    } else if (
      userOfAppChoice === "non user" &&
      deleteDocumentResult === "fulfilled" &&
      updateSessionSpacesResult === "rejected"
    ) {
      bookingCancelledSessionSpacesUpdateFailedSwal();
    }
  }, [
    fireSwal,
    hamburgerHandlerNavigate,
    dispatchResetDeleteDocumentResult,
    dispatchResetDeleteDocumentError,
    dispatchResetDataToUpdateDocument,
    deleteDocumentResult,
    deleteDocumentError,
    updateBalanceError,
    updateBalanceResult,
    updateSessionSpacesError,
    updateSessionSpacesResult,
    cancelBookingSuccessSwal,
    cancelBookingFailedSwal,
    bookingCancelledBalanceUpdateFailedSwal,
    bookingCancelledBalanceUpdatedSessionSpacesFailedSwal,
    userOfAppChoice,
    bookingCancelledSessionSpacesUpdateFailedSwal,
  ]);
};

export default useCancelBookingResultSwal;
