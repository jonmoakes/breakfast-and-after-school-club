import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectEnvironmentVariables } from "../../../store/user/user.selector";
import {
  selectGetPricesError,
  selectSessionTypesAndPrices,
} from "../../../store/session-types-and-prices/session-types-and-prices.selector";
import { getSessionPricesAsync } from "../../../store/session-types-and-prices/session-types-and-prices.slice";

const useGetSessionPrices = () => {
  const sessionTypesAndPrices = useSelector(selectSessionTypesAndPrices);
  const envVariables = useSelector(selectEnvironmentVariables);
  const getPricesError = useSelector(selectGetPricesError);
  const {
    databaseId,
    sessionPricesCollectionId: collectionId,
    sessionPricesDocumentId: documentId,
  } = envVariables;

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(sessionTypesAndPrices).length || getPricesError) return;
    dispatch(getSessionPricesAsync({ databaseId, collectionId, documentId }));
  }, [
    dispatch,
    databaseId,
    collectionId,
    documentId,
    sessionTypesAndPrices,
    getPricesError,
  ]);
};

export default useGetSessionPrices;
