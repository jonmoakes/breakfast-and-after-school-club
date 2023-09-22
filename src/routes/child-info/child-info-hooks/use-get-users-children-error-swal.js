import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import { selectError } from "../../../store/get-users-children/get-users-children.selector";
import { resetError } from "../../../store/get-users-children/get-users-children-slice";

import {
  errorFetchingChildren,
  errorReceivedMessage,
} from "../../../strings/strings";

const useGetUsersChildrenErrorSwal = () => {
  const { fireSwal } = useFireSwal();

  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) return;
    fireSwal(
      "error",
      errorFetchingChildren,
      errorReceivedMessage(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetError());
      }
    });
  }, [dispatch, error, fireSwal]);
};

export default useGetUsersChildrenErrorSwal;
