import { useDispatch } from "react-redux";
import { deleteChildInfoAsync } from "../../../store/delete-child-info/delete-child-info.thunks";
import useGetDeleteChildInfoSelectors from "../../get-selectors/use-get-delete-child-info-selectors";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

const useDeleteChildInfoThunk = () => {
  const { childToDeleteInfo } = useGetDeleteChildInfoSelectors();
  const { databaseId, childrenCollectionId: collectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const deleteChildInfoThunk = () => {
    dispatch(
      deleteChildInfoAsync({ childToDeleteInfo, databaseId, collectionId })
    );
  };

  return { deleteChildInfoThunk };
};

export default useDeleteChildInfoThunk;
