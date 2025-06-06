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
    // appwrite expects age as a number
    const updatedChildInfoWithNumberAge = {
      ...updatedChildInfo,
      childName: updatedChildInfo.childName.toLowerCase(),
      age: Number(updatedChildInfo.age),
    };

    dispatch(
      editChildInfoAsync({
        $id,
        databaseId,
        collectionId,
        updatedChildInfo: updatedChildInfoWithNumberAge,
      })
    );
  };

  return { editChildInfoThunk };
};

export default useEditChildInfoThunk;
