import { useDispatch } from "react-redux";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { requestBookingClosingTimesAsync } from "../../../store/request-date-data/request-date-data.thunks";

const useRequestBookingClosingTimesThunk = () => {
  const {
    databaseId,
    bookingClosingTimesCollectionId: collectionId,
    bookingClosingTimesDocumentId: documentId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const requestBookingClosingTimesThunk = () => {
    dispatch(
      requestBookingClosingTimesAsync({
        databaseId,
        collectionId,
        documentId,
      })
    );
  };

  return { requestBookingClosingTimesThunk };
};

export default useRequestBookingClosingTimesThunk;
