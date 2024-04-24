import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { updateSessionPriceAsync } from "../../../store/database-management/database-management-thunks";

const useUpdateSessionPriceThunk = () => {
  const {
    databaseId,
    sessionPricesCollectionId: collectionId,
    sessionPricesDocumentId: documentId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateSessionPriceThunk = (attributeToUpdate, newPrice) => {
    dispatch(
      updateSessionPriceAsync({
        attributeToUpdate,
        newPrice,
        databaseId,
        collectionId,
        documentId,
      })
    );
  };

  return { updateSessionPriceThunk };
};

export default useUpdateSessionPriceThunk;
