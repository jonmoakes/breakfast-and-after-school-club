import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetSessionTypesAndPricesSelectors from "../../get-selectors/use-get-session-types-and-prices-selectors";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { getSessionPricesAsync } from "../../../store/session-types-and-prices/session-types-and-prices.thunks";

const useGetSessionPricesThunkUseEffect = () => {
  const { sessionTypesAndPrices, sessionTypesAndPricesError } =
    useGetSessionTypesAndPricesSelectors();
  const {
    databaseId,
    sessionPricesCollectionId: collectionId,
    sessionPricesDocumentId: documentId,
  } = useGetCurrentUserSelectors();

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

export default useGetSessionPricesThunkUseEffect;
