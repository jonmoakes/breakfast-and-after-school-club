import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";
import useCancelBookingSuccessSwal from "./swals/use-cancel-booking-success-swal";

import useCancelBookingFailedSwal from "./swals/use-cancel-booking-failed-swal";
import useBookingCancelledBalanceUpdateFailedSwal from "./swals/use-booking-cancelled-balance-update-failed-swal";
import useBookingCancelledBalanceUpdatedSessionSpacesFailedSwal from "./swals/use-booking-cancelled-balance-updated-session-spaces-failed-swal";

const useCancelBookingResultSwal = () => {
  const {
    deleteDocumentResult,
    deleteDocumentError,
    updateBalanceResult,
    updateBalanceError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
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
      deleteDocumentResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      updateSessionSpacesResult === "fulfilled"
    ) {
      cancelBookingSuccessSwal();
    } else if (deleteDocumentResult === "rejected") {
      cancelBookingFailedSwal();
    } else if (
      deleteDocumentResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
      bookingCancelledBalanceUpdateFailedSwal();
    } else if (
      deleteDocumentResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      updateSessionSpacesResult === "rejected"
    ) {
      bookingCancelledBalanceUpdatedSessionSpacesFailedSwal();
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
  ]);
};

export default useCancelBookingResultSwal;
