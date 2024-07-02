import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUsersChildrenSelectors from "../../get-selectors/use-get-users-children-selectors";
import useGetBookSessionSelectors from "../../get-selectors/use-get-book-session-selectors";

import {
  updateRecurringSessionSpacesDocAsync,
  addRecurringSessionsBookingDataAsync,
} from "../../../store/book-recurring-sessions/book-recurring-sessions-thunks";
import { updateUsersBalanceAsync } from "../../../store/database-management/database-management-thunks";

import { bookRecurringSessionsRoute } from "../../../strings/routes/routes-strings";

const useDispatchBookRecurringSessionsThunks = () => {
  const {
    id,
    databaseId,
    termDatesCollectionId,
    userCollectionId,
    bookedSessionsCollectionId,
    name,
    phoneNumber,
    email,
  } = useGetCurrentUserSelectors();
  const { usersChildren } = useGetUsersChildrenSelectors();
  const { childrenSelectedForBooking } = useGetBookSessionSelectors();

  const dispatch = useDispatch();

  const dispatchBookRecurringSessionsThunks = (
    bookingsToAdd,
    sessionChoice,
    numberOfChildrenInBooking,
    sessionPrice
  ) => {
    const route = bookRecurringSessionsRoute;
    const operation = "deduct";

    dispatch(
      updateRecurringSessionSpacesDocAsync({
        bookingsToAdd,
        databaseId,
        termDatesCollectionId,
        route,
        sessionChoice,
        numberOfChildrenInBooking,
        operation,
      })
    ).then((resultAction) => {
      if (updateRecurringSessionSpacesDocAsync.fulfilled.match(resultAction)) {
        const usersDocumentId = id;
        const operation = "deduct";
        dispatch(
          updateUsersBalanceAsync({
            usersDocumentId,
            databaseId,
            userCollectionId,
            sessionPrice,
            operation,
          })
        ).then((resultAction) => {
          if (updateUsersBalanceAsync.fulfilled.match(resultAction)) {
            const collectionId = bookedSessionsCollectionId;

            dispatch(
              addRecurringSessionsBookingDataAsync({
                bookingsToAdd,
                sessionType: sessionChoice,
                childrenSelectedForBooking,
                usersChildren,
                name,
                phoneNumber,
                id,
                email,
                databaseId,
                collectionId,
              })
            );
          }
        });
      }
    });
  };

  return { dispatchBookRecurringSessionsThunks };
};

export default useDispatchBookRecurringSessionsThunks;
