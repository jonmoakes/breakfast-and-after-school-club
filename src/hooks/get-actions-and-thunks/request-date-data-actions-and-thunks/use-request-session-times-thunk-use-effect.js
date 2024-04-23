import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetRequestDateDataSelectors from "../../get-selectors/use-get-request-date-data-selectors";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { requestSessionTimesAsync } from "../../../store/request-date-data/request-date-data.thunks";

const useRequestSessionTimesThunkUseEffect = () => {
  const { sessionTimes } = useGetRequestDateDataSelectors();
  const {
    databaseId,
    sessionTimesCollectionId: collectionId,
    sessionTimesDocumentId: documentId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionTimes) return;

    dispatch(
      requestSessionTimesAsync({
        databaseId,
        collectionId,
        documentId,
      })
    );
  }, [databaseId, collectionId, documentId, sessionTimes, dispatch]);
};

export default useRequestSessionTimesThunkUseEffect;
