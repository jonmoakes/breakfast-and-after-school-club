import { useDispatch } from "react-redux";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { requestBookingClosingTimesAsync } from "../../../store/request-date-data/request-date-data.thunks";
import { useEffect } from "react";
import useGetRequestDateDataSelectors from "../../get-selectors/use-get-request-date-data-selectors";

const useRequestBookingClosingTimesThunkUseEffect = () => {
  const {
    databaseId,
    bookingClosingTimesCollectionId: collectionId,
    bookingClosingTimesDocumentId: documentId,
  } = useGetCurrentUserSelectors();
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (bookingClosingTimes) return;
    dispatch(
      requestBookingClosingTimesAsync({
        databaseId,
        collectionId,
        documentId,
      })
    );
  }, [databaseId, collectionId, documentId, bookingClosingTimes, dispatch]);
};

export default useRequestBookingClosingTimesThunkUseEffect;
