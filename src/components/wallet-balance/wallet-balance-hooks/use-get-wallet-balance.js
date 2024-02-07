import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectCurrentUser,
  selectUserError,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";
import { resetUserErrorMessage } from "../../../store/user/user.slice";

import {
  balanceSuccessfullyReceivedMessage,
  confirmRequestWalletBalance,
  errorFetchingBalanceMessage,
  errorReceivedMessage,
} from "../../../strings/strings";

const useGetWalletBalance = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const error = useSelector(selectUserError);
  const envVariables = useSelector(selectEnvironmentVariables);

  const { id } = currentUser;
  //userCollectionId is being renamed to collectionId
  const { databaseId, userCollectionId: collectionId } = envVariables;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) return;
    fireSwal(
      "error",
      errorFetchingBalanceMessage,
      errorReceivedMessage(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetUserErrorMessage());
      }
    });
  }, [dispatch, error, fireSwal]);

  const confirmResult = () => {
    dispatch(getUsersWalletBalanceAsync({ id, databaseId, collectionId })).then(
      (resultAction) => {
        if (getUsersWalletBalanceAsync.fulfilled.match(resultAction)) {
          fireSwal(
            "success",
            balanceSuccessfullyReceivedMessage,
            "",
            0,
            true,
            false
          );
        }
      }
    );
  };

  const confirmRequestLatestWalletBalance = () => {
    confirmSwal(confirmRequestWalletBalance, "", "get balance", () =>
      confirmResult()
    );
  };

  return { confirmRequestLatestWalletBalance };
};

export default useGetWalletBalance;
