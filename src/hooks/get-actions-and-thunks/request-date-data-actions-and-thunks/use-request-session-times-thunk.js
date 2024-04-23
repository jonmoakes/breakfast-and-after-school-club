import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { requestSessionTimesAsync } from "../../../store/request-date-data/request-date-data.thunks";

const useRequestSessionTimesThunk = () => {
  const {
    databaseId,
    sessionTimesCollectionId: collectionId,
    sessionTimesDocumentId: documentId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const requestSessionTimesThunk = () => {
    dispatch(
      requestSessionTimesAsync({
        databaseId,
        collectionId,
        documentId,
      })
    );
  };

  return { requestSessionTimesThunk };
};

export default useRequestSessionTimesThunk;
