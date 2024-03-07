import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectCurrentUserSelectors,
  resetCurrentUserWalletBalanceResult,
  resetCurrentUserWalletBalanceError,
} from "../../../store/user/user.slice";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";

import { balanceSuccessfullyReceivedMessage } from "../../../strings/successes/successes-strings";
import { confirmRequestWalletBalance } from "../../../strings/confirms/confirms-strings";
import {
  errorFetchingBalanceMessage,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";

const useGetWalletBalance = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const {
    currentUser,
    currentUserWalletBalanceResult,
    currentUserWalletBalanceError,
    currentUserEnvironmentVariables,
  } = useSelector(selectCurrentUserSelectors);

  const { id } = currentUser;
  //userCollectionId is being renamed to collectionId
  const { databaseId, userCollectionId: collectionId } =
    currentUserEnvironmentVariables;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUserWalletBalanceResult && !currentUserWalletBalanceError)
      return;

    const error = currentUserWalletBalanceError;
    fireSwal(
      "error",
      errorFetchingBalanceMessage,
      errorReceivedMessage(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetCurrentUserWalletBalanceResult());
        dispatch(resetCurrentUserWalletBalanceError());
      }
    });
  }, [
    dispatch,
    currentUserWalletBalanceResult,
    currentUserWalletBalanceError,
    fireSwal,
  ]);

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
          ).then((isConfirmed) => {
            if (isConfirmed) {
              dispatch(resetCurrentUserWalletBalanceResult());
            }
          });
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
