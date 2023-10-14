import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import { selectRequestDateData } from "../../../store/request-date-data/request-date-data.selector";
import { setDateData } from "../../../store/request-date-data/request-date-data.slice";

const useSessionSpacesListener = () => {
  const requestDateData = useSelector(selectRequestDateData); // gets the dateData object from the slice
  const dispatch = useDispatch();

  const documentId = requestDateData ? requestDateData.$id : "";

  useEffect(() => {
    const unsubscribe = client.subscribe(
      `databases.${import.meta.env.VITE_DEVELOPMENT_DATABASE_ID}.collections.${
        import.meta.env.VITE_2023_2024_TERM_DATES_COLLECTION_ID
      }.documents.${documentId}`,

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
  }, [dispatch, documentId, requestDateData]);
};

export default useSessionSpacesListener;
