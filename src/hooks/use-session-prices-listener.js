import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { client } from "../utils/appwrite/appwrite-config";

import { setSessionTypesAndPrices } from "../store/session-types-and-prices/session-types-and-prices.slice";

import { createSessionTypesAndPricesObject } from "../functions/create-session-types-and-prices-object";

const useSessionPricesListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = client.subscribe(
      `databases.${import.meta.env.VITE_DEVELOPMENT_DATABASE_ID}.collections.${
        import.meta.env.VITE_SESSION_PRICES_COLLECTION_ID
      }.documents.${import.meta.env.VITE_SESSION_PRICES_DOCUMENT_ID}`,

      (response) => {
        const {
          morningSessionPrice,
          afternoonShortSessionPrice,
          afternoonLongSessionPrice,
          morningAndAfternoonShortSessionPrice,
          morningAndAfternoonLongSessionPrice,
        } = response.payload;

        dispatch(
          setSessionTypesAndPrices(
            createSessionTypesAndPricesObject(
              morningSessionPrice,
              afternoonShortSessionPrice,
              afternoonLongSessionPrice,
              morningAndAfternoonShortSessionPrice,
              morningAndAfternoonLongSessionPrice
            )
          )
        );
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};

export default useSessionPricesListener;
