import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { updateUsersBalanceAsync } from "../../../store/database-management/database-management-thunks";

const useUpdateUsersBalanceThunk = () => {
  const { databaseId, userCollectionId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateUsersBalanceThunk = (
    usersDocumentId,
    sessionPrice,
    operation
  ) => {
    dispatch(
      updateUsersBalanceAsync({
        usersDocumentId,
        databaseId,
        userCollectionId,
        sessionPrice,
        operation,
      })
    );
  };

  return { updateUsersBalanceThunk };
};

export default useUpdateUsersBalanceThunk;
