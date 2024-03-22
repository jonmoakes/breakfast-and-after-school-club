import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";
import useGetChosenEntryChildDetailsSelectors from "../../../hooks/get-selectors/use-get-chosen-entry-child-details-selectors";
import useChosenEntryChildDetailsActions from "../../../hooks/get-actions-and-thunks/chosen-entry-child-details-actions-and-thunks/use-chosen-entry-child-details-actions";

import {
  errorFetchingChildDetails,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";

const useGetChildrenEntryChildDetailsErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { chosenEntryChildDetailsError } =
    useGetChosenEntryChildDetailsSelectors();
  const { dispatchResetChosenEntryChildDetailsError } =
    useChosenEntryChildDetailsActions();

  const navigate = useNavigate();

  useEffect(() => {
    if (!chosenEntryChildDetailsError) return;

    fireSwal(
      "error",
      errorFetchingChildDetails,
      errorReceivedMessage(chosenEntryChildDetailsError),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetChosenEntryChildDetailsError();
        navigate(-1);
      }
    });
  }, [
    chosenEntryChildDetailsError,
    fireSwal,
    navigate,
    dispatchResetChosenEntryChildDetailsError,
  ]);
};

export default useGetChildrenEntryChildDetailsErrorSwal;
