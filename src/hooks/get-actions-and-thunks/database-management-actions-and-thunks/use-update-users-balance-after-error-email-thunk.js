import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { updateUsersBalanceAfterErrorEmailAsync } from "../../../store/database-management/database-management-thunks";

const useUpdateUsersBalanceAfterErrorEmailThunk = () => {
  const { databaseId, userCollectionId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateUsersBalanceAfterErrorEmailThunk = (
    usersDocumentId,
    refundPrice
  ) => {
    dispatch(
      updateUsersBalanceAfterErrorEmailAsync({
        usersDocumentId,
        databaseId,
        userCollectionId,
        refundPrice,
      })
    );
  };

  return { updateUsersBalanceAfterErrorEmailThunk };
};

export default useUpdateUsersBalanceAfterErrorEmailThunk;
