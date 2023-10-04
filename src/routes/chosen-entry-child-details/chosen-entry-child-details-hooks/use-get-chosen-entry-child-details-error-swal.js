import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import { selectError } from "../../../store/chosen-entry-child-details/chosen-entry-child-details.selector";
import { resetError } from "../../../store/chosen-entry-child-details/chosen-entry-child-details.slice";
import {
  errorFetchingChildDetails,
  errorReceivedMessage,
} from "../../../strings/strings";

const useGetChildrenEntryChildDetailsErrorSwal = () => {
  const { fireSwal } = useFireSwal();

  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!error) return;

    fireSwal(
      "error",
      errorFetchingChildDetails,
      errorReceivedMessage(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetError());
        navigate(-1);
      }
    });
  }, [error, fireSwal, dispatch, navigate]);
};

export default useGetChildrenEntryChildDetailsErrorSwal;
