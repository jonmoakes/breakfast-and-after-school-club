import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectEnvironmentVariables } from "../store/user/user.selector";
import { getSessionPricesAsync } from "../store/session-types-and-prices/session-types-and-prices.slice";

const useGetSessionPrices = () => {
  const envVariables = useSelector(selectEnvironmentVariables);
  const {
    databaseId,
    sessionPricesCollectionId: collectionId,
    sessionPricesDocumentId: documentId,
  } = envVariables;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessionPricesAsync({ databaseId, collectionId, documentId }));
  }, [dispatch, databaseId, collectionId, documentId]);
};

export default useGetSessionPrices;
