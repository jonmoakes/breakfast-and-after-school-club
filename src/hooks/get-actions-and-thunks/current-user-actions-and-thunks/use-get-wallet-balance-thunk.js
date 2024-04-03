import { useDispatch } from "react-redux";

import useFireSwal from "../../use-fire-swal";

import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useCurrentUserActions from "./use-current-user-actions";
import { balanceSuccessfullyReceivedMessage } from "../../../strings/successes/successes-strings";

const useGetWalletBalanceThunk = () => {
  const {
    id,
    databaseId,
    userCollectionId: collectionId,
  } = useGetCurrentUserSelectors();
  const { dispatchResetCurrentUserWalletBalanceResult } =
    useCurrentUserActions();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const getWalletBalanceThunk = () => {
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
              dispatchResetCurrentUserWalletBalanceResult();
            }
          });
        }
      }
    );
  };

  return { getWalletBalanceThunk };
};

export default useGetWalletBalanceThunk;
