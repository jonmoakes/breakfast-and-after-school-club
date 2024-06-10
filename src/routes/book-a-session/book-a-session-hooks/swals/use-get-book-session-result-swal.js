import { useEffect } from "react";

import useGetDatabaseManagmentSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useReturnLogic from "../logic/use-return-logic";
import useUpdateBalanceErrorResetSessionDocSwal from "./use-update-balance-error-reset-session-doc-swal";
import useAddSessionBookingInfoErrorSwal from "./use-add-session-booking-info-error-swal";
import useUpdateSessionSpacesErrorSwal from "./use-update-session-spaces-error-swal";
import useSendEmailConfirmation from "../use-send-email-confirmation";

const useGetBookSessionResultSwal = () => {
  const { noActionsFiredYet } = useReturnLogic();
  const { updateSessionSpacesErrorSwal } = useUpdateSessionSpacesErrorSwal();
  const { swalConfirmed, updateBalanceErrorResetSessionDocSwal } =
    useUpdateBalanceErrorResetSessionDocSwal();
  const { addSessionBookingInfoErrorSwal } =
    useAddSessionBookingInfoErrorSwal();
  const { updateBalanceResult, updateSessionSpacesResult, addBookingResult } =
    useGetDatabaseManagmentSelectors();
  const { sendEmailConfirmation } = useSendEmailConfirmation();

  useEffect(() => {
    if (noActionsFiredYet() || swalConfirmed) return;
    if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addBookingResult === "fulfilled"
    ) {
      sendEmailConfirmation();
    } else if (updateSessionSpacesResult === "rejected") {
      updateSessionSpacesErrorSwal();
    } else if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
      updateBalanceErrorResetSessionDocSwal();
    } else if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addBookingResult === "rejected"
    ) {
      addSessionBookingInfoErrorSwal();
    }
  }, [
    swalConfirmed,
    updateBalanceResult,
    updateSessionSpacesResult,
    addBookingResult,
    noActionsFiredYet,
    updateSessionSpacesErrorSwal,
    updateBalanceErrorResetSessionDocSwal,
    addSessionBookingInfoErrorSwal,
    sendEmailConfirmation,
  ]);
};

export default useGetBookSessionResultSwal;
