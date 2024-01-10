import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import { selectRequestDateData } from "../../../store/request-date-data/request-date-data.selector";
import { selectEnvironmentVariables } from "../../../store/user/user.selector";
import { setDateData } from "../../../store/request-date-data/request-date-data.slice";

const useSessionSpacesListener = () => {
  const requestDateData = useSelector(selectRequestDateData); // gets the dateData object from the slice
  const envVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();

  const { databaseId, termDatesCollectionId } = envVariables;
  const documentId = requestDateData ? requestDateData.$id : "";

  useEffect(() => {
    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${termDatesCollectionId}.documents.${documentId}`,

      (response) => {
        const { morningSessionSpaces, afternoonSessionSpaces } =
          response.payload;

        const updatedDateData = {
          ...requestDateData,
          morningSessionSpaces,
          afternoonSessionSpaces,
        };

        dispatch(setDateData(updatedDateData));
      }
    );

    return () => {
      unsubscribe();
    };
  }, [
    dispatch,
    documentId,
    requestDateData,
    databaseId,
    termDatesCollectionId,
  ]);
};

export default useSessionSpacesListener;
