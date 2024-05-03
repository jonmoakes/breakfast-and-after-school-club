import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { deleteChildOrUserUserAsync } from "../../../store/database-management/database-management-thunks";

const useDeleteChildAndUserDocumentThunk = () => {
  const {
    databaseId,
    userCollectionId: collectionId,
    childrenCollectionId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const deleteChildThunk = (childToDeleteDocumentId) => {
    const documentId = childToDeleteDocumentId;
    const collectionId = childrenCollectionId;

    dispatch(
      deleteChildOrUserUserAsync({
        databaseId,
        collectionId,
        documentId,
      })
    );
  };

  const deleteUserThunk = (userToDeleteDocumentId) => {
    const documentId = userToDeleteDocumentId;
    dispatch(
      deleteChildOrUserUserAsync({
        databaseId,
        collectionId,
        documentId,
      })
    );
  };

  return { deleteChildThunk, deleteUserThunk };
};

export default useDeleteChildAndUserDocumentThunk;
