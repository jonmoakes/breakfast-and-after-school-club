import { useDispatch } from "react-redux";

import {
  deleteDocumentAsync,
  updateSessionSpacesDocAsync,
} from "../../../../store/database-management/database-management-thunks";
import useGetCurrentUserSelectors from "../../../get-selectors/use-get-current-user-selectors";

import { databaseManagementCancelBookingRoute } from "../../../../strings/routes/routes-strings";

const useUpdateSessionSpacesRemoveBookingThunk = () => {
  const { databaseId, bookedSessionsCollectionId, termDatesCollectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateSessionSpacesRemoveBookingThunk = (
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking,
    bookingId
  ) => {
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
    ).then((resultAction) => {
      if (updateSessionSpacesDocAsync.fulfilled.match(resultAction)) {
        const collectionId = bookedSessionsCollectionId;
        const documentId = bookingId;
        dispatch(
          deleteDocumentAsync({
            databaseId,
            collectionId,
            documentId,
          })
        );
      }
    });
  };

  return { updateSessionSpacesRemoveBookingThunk };
};

export default useUpdateSessionSpacesRemoveBookingThunk;
