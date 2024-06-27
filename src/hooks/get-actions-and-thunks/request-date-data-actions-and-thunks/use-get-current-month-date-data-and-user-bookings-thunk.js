import { useDispatch } from "react-redux";
import { format } from "date-fns";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useBookRecurringSessionsActions from "../book-recurring-sessions-actions-thunks/use-book-recurring-sessions-actions";

import { requestAllDatesForCurrentMonthAsync } from "../../../store/request-date-data/request-date-data.thunks";
import { fetchBookedSessionsUserFromTodayOnwardsAsync } from "../../../store/booked-sessions-user/booked-sessions-user.thunks";

const useGetCurrentMonthDateDataAndUserBookingsThunk = () => {
  const { databaseId, termDatesCollectionId, bookedSessionsCollectionId, id } =
    useGetCurrentUserSelectors();
  const {
    dispatchSetBookingsToAdd,
    dispatchSetShowConfirmButton,
    dispatchSetShowHelp,
  } = useBookRecurringSessionsActions();

  const dispatch = useDispatch();

  const getCurrentMonthDateDataAndUserBookingsThunk = () => {
    const date = new Date();
    const monthNumericString = format(date, "MM");
    const yearNumericString = format(date, "yyyy");

    if (!monthNumericString || !yearNumericString) return;

    const collectionId = termDatesCollectionId;
    dispatch(
      requestAllDatesForCurrentMonthAsync({
        databaseId,
        collectionId,
        monthNumericString,
        yearNumericString,
      })
    ).then((resultAction) => {
      if (requestAllDatesForCurrentMonthAsync.fulfilled.match(resultAction)) {
        dispatch(
          fetchBookedSessionsUserFromTodayOnwardsAsync({
            id,
            databaseId,
            bookedSessionsCollectionId,
          })
        ).then((resultAction) => {
          if (
            fetchBookedSessionsUserFromTodayOnwardsAsync.fulfilled.match(
              resultAction
            )
          ) {
            dispatchSetBookingsToAdd();
            dispatchSetShowConfirmButton();
            dispatchSetShowHelp();
          }
        });
      }
    });
  };

  return { getCurrentMonthDateDataAndUserBookingsThunk };
};

export default useGetCurrentMonthDateDataAndUserBookingsThunk;
