import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { updateUsersBalanceAfterErrorEmailAsync } from "../../../store/database-management/database-management-thunks";

const useUpdateUsersBalanceAfterErrorEmailThunk = () => {
  const { databaseId, userCollectionId: collectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateUsersBalanceAfterErrorEmailThunk = (documentId, refundPrice) => {
    dispatch(
      updateUsersBalanceAfterErrorEmailAsync({
        documentId,
        databaseId,
        collectionId,
        refundPrice,
      })
    );
  };

  return { updateUsersBalanceAfterErrorEmailThunk };
};

export default useUpdateUsersBalanceAfterErrorEmailThunk;
