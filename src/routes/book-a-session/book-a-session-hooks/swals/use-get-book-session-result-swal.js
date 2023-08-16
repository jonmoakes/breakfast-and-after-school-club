import { useEffect } from "react";
import { useSelector } from "react-redux";

import useReturnLogic from "../return-logic-and-reset-state/use-return-logic";
import useSuccessSwal from "./use-success-swal";
import useUpdateSessionDocErrorSwal from "./use-update-session-doc-error-swal";
import useUpdateBalanceErrorResetSessionDocSwal from "./use-update-balance-error-reset-session-doc-swal";

import {
  selectUpdateSessionDoc,
  selectUpdateUserDocBalance,
} from "../../../../store/book-session/book-session.selector";

const useGetBookSessionResultSwal = () => {
  const { noActionsFiredYet } = useReturnLogic();
  const { successSwal } = useSuccessSwal();
  const { updateSessionDocErrorSwal } = useUpdateSessionDocErrorSwal();
  const { swalConfirmed, updateBalanceErrorResetSessionDocSwal } =
    useUpdateBalanceErrorResetSessionDocSwal();

  const updateSessionDoc = useSelector(selectUpdateSessionDoc);
  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);

  const updateSessionResult = updateSessionDoc.result;
  const updateBalanceResult = updateUserDocBalance.result;

  useEffect(() => {
    if (noActionsFiredYet() || swalConfirmed) return;

    if (
      updateSessionResult === "fulfilled" &&
      updateBalanceResult === "fulfilled"
    ) {
      successSwal();
    } else if (updateSessionResult === "rejected") {
      updateSessionDocErrorSwal();
    } else if (
      updateSessionResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
      updateBalanceErrorResetSessionDocSwal();
    }
  }, [
    noActionsFiredYet,
    successSwal,
    swalConfirmed,
    updateBalanceErrorResetSessionDocSwal,
    updateBalanceResult,
    updateSessionDocErrorSwal,
    updateSessionResult,
  ]);
};

export default useGetBookSessionResultSwal;
