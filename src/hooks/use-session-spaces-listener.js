import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../utils/appwrite/appwrite-config";

import { selectCurrentUser } from "../store/user/user.selector";
import { selectRequestDateData } from "../store/request-date-data/request-date-data.selector";
import { setDateData } from "../store/request-date-data/request-date-data.slice";

const useSessionSpacesListener = () => {
  const currentUser = useSelector(selectCurrentUser);
  const requestDateData = useSelector(selectRequestDateData);
  const dispatch = useDispatch();

  const requestDateDataId = requestDateData ? requestDateData.$id : "";

  useEffect(() => {
    if (!currentUser || !requestDateData) return;

    const unsubscribe = client.subscribe(
      `databases.${import.meta.env.VITE_DEVELOPMENT_DATABASE_ID}.collections.${
        import.meta.env.VITE_2023_2024_TERM_DATES_COLLECTION_ID
      }.documents.${requestDateDataId}`,

      (response) => {
        const { morningSessionSpaces, afternoonSessionSpaces, ...rest } =
          requestDateData;

        dispatch(
          setDateData({
            ...rest,
            morningSessionSpaces: response.payload.morningSessionSpaces,
            afternoonSessionSpaces: response.payload.afternoonSessionSpaces,
          })
        );
      }
    );
    return () => {
      unsubscribe();
    };
  }, [currentUser, dispatch, requestDateData, requestDateDataId]);
};

export default useSessionSpacesListener;
