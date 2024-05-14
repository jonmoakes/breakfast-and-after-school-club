import { useDispatch } from "react-redux";

import { createUserDocumentAsync } from "../../../store/database-management/database-management-thunks";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

const useCreateUserDocumentThunk = () => {
  const {
    databaseId,
    userCollectionId: collectionId,
    schoolCode,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const createUserDocumentThunk = (
    parentName,
    parentEmail,
    parentPhoneNumber
  ) => {
    dispatch(
      createUserDocumentAsync({
        parentName,
        parentEmail,
        schoolCode,
        parentPhoneNumber,
        databaseId,
        collectionId,
      })
    );
  };

  return { createUserDocumentThunk };
};

export default useCreateUserDocumentThunk;
