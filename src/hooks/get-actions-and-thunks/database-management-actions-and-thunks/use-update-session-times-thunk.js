import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { updateSessionTimesAsync } from "../../../store/database-management/database-management-thunks";

const useUpdateSessionTimesThunk = () => {
  const {
    databaseId,
    sessionTimesCollectionId: collectionId,
    sessionTimesDocumentId: documentId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateSessionTimesThunk = (attributeToUpdate, newTime) => {
    dispatch(
      updateSessionTimesAsync({
        attributeToUpdate,
        newTime,
        databaseId,
        collectionId,
        documentId,
      })
    );
  };

  return { updateSessionTimesThunk };
};

export default useUpdateSessionTimesThunk;
