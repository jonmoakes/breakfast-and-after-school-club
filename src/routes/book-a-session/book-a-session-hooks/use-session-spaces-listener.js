import { useEffect } from "react";

import { client } from "../../../utils/appwrite/appwrite-config";

import useDatesLogic from "./logic/use-dates-logic";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useRequestDateDataActions from "../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-date-data-actions";

const useSessionSpacesListener = () => {
  const { documentId } = useDatesLogic();
  const { dispatchListenerSetDateData } = useRequestDateDataActions();
  const { databaseId, termDatesCollectionId } = useGetCurrentUserSelectors();

  useEffect(() => {
    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${termDatesCollectionId}.documents.${documentId}`,

      (response) => {
        const { $id, date, morningSessionSpaces, afternoonSessionSpaces } =
          response.payload;

        const updatedDateData = {
          $id,
          date,
          morningSessionSpaces,
          afternoonSessionSpaces,
        };

        dispatchListenerSetDateData(updatedDateData);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [
    documentId,
    databaseId,
    termDatesCollectionId,
    dispatchListenerSetDateData,
  ]);
};

export default useSessionSpacesListener;
