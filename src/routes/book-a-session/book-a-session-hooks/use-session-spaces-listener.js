import { useEffect } from "react";

import { client } from "../../../utils/appwrite/appwrite-config";

import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useRequestDateDataActions from "../../../hooks/get-actions/use-request-date-data-actions";

const useSessionSpacesListener = () => {
  const { dateData, documentId } = useGetRequestDateDataSelectors();
  const { dispatchSetDateData } = useRequestDateDataActions();
  const { databaseId, termDatesCollectionId } = useGetCurrentUserSelectors();

  useEffect(() => {
    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${termDatesCollectionId}.documents.${documentId}`,

      (response) => {
        const { morningSessionSpaces, afternoonSessionSpaces } =
          response.payload;

        const updatedDateData = {
          ...dateData,
          morningSessionSpaces,
          afternoonSessionSpaces,
        };

        dispatchSetDateData(updatedDateData);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [
    documentId,
    dateData,
    databaseId,
    termDatesCollectionId,
    dispatchSetDateData,
  ]);
};

export default useSessionSpacesListener;
