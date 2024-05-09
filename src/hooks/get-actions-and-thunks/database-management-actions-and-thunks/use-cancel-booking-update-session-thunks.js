import { useDispatch } from "react-redux";

import {
  deleteDocumentAsync,
  updateSessionSpacesDocAsync,
} from "../../../store/database-management/database-management-thunks";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { databaseManagementCancelBookingRoute } from "../../../strings/routes/routes-strings";

const useCancelBookingUpdateSessionThunks = () => {
  const { databaseId, bookedSessionsCollectionId, termDatesCollectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const cancelBookingUpdateSessionThunks = (
    bookingId,
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking
  ) => {
    const collectionId = bookedSessionsCollectionId;
    const documentId = bookingId;

    dispatch(
      deleteDocumentAsync({
        databaseId,
        collectionId,
        documentId,
      })
    ).then((resultAction) => {
      if (deleteDocumentAsync.fulfilled.match(resultAction)) {
        const date = sessionDate;
        const sessionType = typeOfSession;
        const route = databaseManagementCancelBookingRoute;
        const operation = "add";

        dispatch(
          updateSessionSpacesDocAsync({
            numberOfChildrenInBooking,
            date,
            databaseId,
            termDatesCollectionId,
            route,
            sessionType,
            operation,
          })
        );
      }
    });
  };

  return { cancelBookingUpdateSessionThunks };
};

export default useCancelBookingUpdateSessionThunks;
