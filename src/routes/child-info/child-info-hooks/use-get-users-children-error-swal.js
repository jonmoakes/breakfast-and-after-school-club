import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectGetUsersChildrenSelectors,
  resetUsersChildrenError,
} from "../../../store/get-users-children/get-users-children.slice";

import {
  errorFetchingChildren,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";
import { accountRoute } from "../../../strings/routes/routes-strings";

const useGetUsersChildrenErrorSwal = () => {
  const { fireSwal } = useFireSwal();

  const { getUsersChildrenError } = useSelector(
    selectGetUsersChildrenSelectors
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate(accountRoute);
      }
    });
  }, [dispatch, getUsersChildrenError, fireSwal, navigate]);
};

export default useGetUsersChildrenErrorSwal;
