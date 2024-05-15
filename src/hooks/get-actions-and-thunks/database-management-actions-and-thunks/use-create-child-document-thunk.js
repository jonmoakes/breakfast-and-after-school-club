import { useDispatch } from "react-redux";

import { createChildDocumentAsync } from "../../../store/database-management/database-management-thunks";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

const useCreateChildDocumentThunk = () => {
  const { databaseId, childrenCollectionId: collectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const createChildDocumentThunk = (
    childAge,
    childName,
    consent,
    medicalInfo,
    dietryRequirements,
    additionalInfo,
    parentName,
    parentEmail,
    parentPhoneNumber,
    parentsUserId
  ) => {
    dispatch(
      createChildDocumentAsync({
        childAge,
        childName,
        consent,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
        parentName,
        parentEmail,
        parentPhoneNumber,
        parentsUserId,
        databaseId,
        collectionId,
      })
    );
  };

  return { createChildDocumentThunk };
};

export default useCreateChildDocumentThunk;
