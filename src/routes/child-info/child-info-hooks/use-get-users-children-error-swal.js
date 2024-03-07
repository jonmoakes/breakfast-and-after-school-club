import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectGetUsersChildrenSelectors,
  resetUsersChildrenError,
} from "../../../store/get-users-children/get-users-children.slice";

import {
  errorFetchingChildren,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";

const useGetUsersChildrenErrorSwal = () => {
  const { fireSwal } = useFireSwal();

  const { getUsersChildrenError } = useSelector(
    selectGetUsersChildrenSelectors
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const error = getUsersChildrenError;
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
        dispatch(resetUsersChildrenError());
      }
    });
  }, [dispatch, getUsersChildrenError, fireSwal]);
};

export default useGetUsersChildrenErrorSwal;
