import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectEnvironmentVariables } from "../../../store/user/user.selector";
import { selectSessionTypesAndPricesSelectors } from "../../../store/session-types-and-prices/session-types-and-prices.slice";
import { getSessionPricesAsync } from "../../../store/session-types-and-prices/session-types-and-prices.thunks";

const useGetSessionPrices = () => {
  const { sessionTypesAndPrices, sessionTypesAndPricesError } = useSelector(
    selectSessionTypesAndPricesSelectors
  );
  const envVariables = useSelector(selectEnvironmentVariables);
  const {
    databaseId,
    sessionPricesCollectionId: collectionId,
    sessionPricesDocumentId: documentId,
  } = envVariables;

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(sessionTypesAndPrices).length || sessionTypesAndPricesError)
      return;
    dispatch(getSessionPricesAsync({ databaseId, collectionId, documentId }));
  }, [
    dispatch,
    databaseId,
    collectionId,
    documentId,
    sessionTypesAndPrices,
    sessionTypesAndPricesError,
  ]);
};

export default useGetSessionPrices;
