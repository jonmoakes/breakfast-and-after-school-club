import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { getSessionPricesAsync } from "../../../store/session-types-and-prices/session-types-and-prices.thunks";

const useRequestSessionPricesThunk = () => {
  const {
    databaseId,
    sessionPricesCollectionId: collectionId,
    sessionPricesDocumentId: documentId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const requestSessionPricesThunk = () => {
    dispatch(getSessionPricesAsync({ databaseId, collectionId, documentId }));
  };

  return { requestSessionPricesThunk };
};

export default useRequestSessionPricesThunk;
