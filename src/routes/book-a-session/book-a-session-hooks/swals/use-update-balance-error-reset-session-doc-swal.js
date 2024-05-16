import { useState } from "react";

import useGetChildrenLogic from "../logic/use-get-children-logic";
import useResetSessionSpacesThunk from "../../../../hooks/get-actions-and-thunks/book-session-actions-and-thunks/use-reset-session-spaces-thunk";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useDatesLogic from "../logic/use-dates-logic";
import useSessionLogic from "../logic/use-session-logic";

import { errorUpdatingBalanceMessage } from "../../../../strings/errors/errors-strings";

const useUpdateBalanceErrorResetSessionDocSwal = () => {
  const { resetSessionSpacesThunk } = useResetSessionSpacesThunk();
  const { fireSwal } = useFireSwal();
  const { date } = useDatesLogic();
  const { updateBalanceError, sessionType } = useSessionLogic();
  const { numberOfChildrenInBooking } = useGetChildrenLogic();

  const [swalConfirmed, setSwalConfirmed] = useState(false);

  // the error here is that whilst session spaces have been updated, the users balance has not.
  // we therefore reset the session spaces and to the user, we just make it appear as a generic fail.
  // the session spaces are then attempted to be reset when they tap ok.
  // if resetting the session spaces fails, we need to inform the app owner via email to update the session spaces manually.
  // the user is not informed of the session spaces error, but to tap ok which will email the app owner with details of the error for them to update manually.
  const updateBalanceErrorResetSessionDocSwal = () => {
    fireSwal(
      "error",
      errorUpdatingBalanceMessage,
      updateBalanceError,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        setSwalConfirmed(true);
        resetSessionSpacesThunk(numberOfChildrenInBooking, date, sessionType);
      }
    });
  };

  return { swalConfirmed, updateBalanceErrorResetSessionDocSwal };
};

export default useUpdateBalanceErrorResetSessionDocSwal;
