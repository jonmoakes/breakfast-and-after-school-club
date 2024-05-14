import { useDispatch } from "react-redux";

import {
  deleteDocumentAsync,
  updateSessionSpacesDocAsync,
  updateUsersBalanceAsync,
} from "../../../../store/database-management/database-management-thunks";
import useGetCurrentUserSelectors from "../../../get-selectors/use-get-current-user-selectors";
import { databaseManagementCancelBookingRoute } from "../../../../strings/routes/routes-strings";

const useUpdateBalanceUpdateSessionSpacesRemoveBookingThunk = () => {
  const {
    databaseId,
    bookedSessionsCollectionId,
    userCollectionId,
    termDatesCollectionId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateBalanceUpdateSessionSpacesRemoveBookingThunk = (
    userIdOfParent,
    sessionPrice,
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking,
    bookingId
  ) => {
    const usersDocumentId = userIdOfParent;
    const operation = "add";

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
      }
    });

    // dispatch(
    //   deleteDocumentAsync({
    //     databaseId,
    //     collectionId,
    //     documentId,
    //   })
    // )
    // .then((resultAction) => {
    //   if (deleteDocumentAsync.fulfilled.match(resultAction)) {
    //     const usersDocumentId = userIdOfParent;
    //     const operation = "add";
    //     dispatch(
    //       updateUsersBalanceAsync({
    //         usersDocumentId,
    //         databaseId,
    //         userCollectionId,
    //         sessionPrice,
    //         operation,
    //       })
    //     ).then((resultAction) => {
    //       if (updateUsersBalanceAsync.fulfilled.match(resultAction)) {
    //         const date = sessionDate;
    //         const sessionType = typeOfSession;
    //         const route = databaseManagementCancelBookingRoute;
    //         const operation = "add";
    //         dispatch(
    //           updateSessionSpacesDocAsync({
    //             numberOfChildrenInBooking,
    //             date,
    //             databaseId,
    //             termDatesCollectionId,
    //             route,
    //             sessionType,
    //             operation,
    //           })
    //         );
    //       }
    //     });
    //   }
    // });
  };

  return { updateBalanceUpdateSessionSpacesRemoveBookingThunk };
};

export default useUpdateBalanceUpdateSessionSpacesRemoveBookingThunk;
