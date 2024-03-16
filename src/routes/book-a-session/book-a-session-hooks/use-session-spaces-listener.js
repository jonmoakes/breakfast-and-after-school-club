import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";

import { setDateData } from "../../../store/request-date-data/request-date-data.slice";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

const useSessionSpacesListener = () => {
  const { dateData } = useGetRequestDateDataSelectors();

  const { currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const dispatch = useDispatch();

  const { databaseId, termDatesCollectionId } = currentUserEnvironmentVariables;
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
