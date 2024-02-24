import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import {
  setDateData,
  selectRequestDateDataSelectors,
} from "../../../store/request-date-data/request-date-data.slice";
import { selectEnvironmentVariables } from "../../../store/user/user.selector";

const useSessionSpacesListener = () => {
  const { dateData } = useSelector(selectRequestDateDataSelectors); // gets the dateData object from the slice
  const envVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();

  const { databaseId, termDatesCollectionId } = envVariables;
  const documentId = dateData ? dateData.$id : "";

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

        dispatch(setDateData(updatedDateData));
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch, documentId, dateData, databaseId, termDatesCollectionId]);
};

export default useSessionSpacesListener;
