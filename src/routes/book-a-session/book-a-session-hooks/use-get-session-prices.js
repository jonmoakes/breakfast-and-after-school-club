import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { databases } from "../../../utils/appwrite/appwrite-config";
import { setSessionTypesAndPrices } from "../../../store/session-types-and-prices/session-types-and-prices.slice";

import { createSessionTypesAndPricesObject } from "../../../functions/create-session-types-and-prices-object";

const useGetSessionPrices = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getSessionPrices = async () => {
      const getPrices = await databases.getDocument(
        `${import.meta.env.VITE_DEVELOPMENT_DATABASE_ID}`,
        `${import.meta.env.VITE_SESSION_PRICES_COLLECTION_ID}`,
        `${import.meta.env.VITE_SESSION_PRICES_DOCUMENT_ID}`
      );
      const {
        morningSessionPrice,
        afternoonShortSessionPrice,
        afternoonLongSessionPrice,
        morningAndAfternoonShortSessionPrice,
        morningAndAfternoonLongSessionPrice,
      } = getPrices;

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
    };
    getSessionPrices();
  }, [dispatch]);
};

export default useGetSessionPrices;
