import { useDispatch } from "react-redux";
import { editChildInfoAsync } from "../../../store/edit-child-info/edit-child-info.thunks";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetEditChildInfoSelectors from "../../get-selectors/use-get-edit-child-info-selectors";

const useEditChildInfoThunk = () => {
  const { $id } = useGetEditChildInfoSelectors();
  const { databaseId, childrenCollectionId: collectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const editChildInfoThunk = (updatedChildInfo) => {
    dispatch(
      editChildInfoAsync({
        $id,
        databaseId,
        collectionId,
        updatedChildInfo,
      })
    );
  };

  return { editChildInfoThunk };
};

export default useEditChildInfoThunk;
