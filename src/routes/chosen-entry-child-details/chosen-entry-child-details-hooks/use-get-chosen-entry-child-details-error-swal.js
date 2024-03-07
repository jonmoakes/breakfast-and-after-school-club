import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetChosenEntryChildDetailsError,
  selectChosenEntryChildDetailsSelectors,
} from "../../../store/chosen-entry-child-details/chosen-entry-child-details.slice";

import {
  errorFetchingChildDetails,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";

const useGetChildrenEntryChildDetailsErrorSwal = () => {
  const { fireSwal } = useFireSwal();

  const { chosenEntryChildDetailsError } = useSelector(
    selectChosenEntryChildDetailsSelectors
  );

  const dispatch = useDispatch();
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
        dispatch(resetChosenEntryChildDetailsError());
        navigate(-1);
      }
    });
  }, [chosenEntryChildDetailsError, fireSwal, dispatch, navigate]);
};

export default useGetChildrenEntryChildDetailsErrorSwal;
