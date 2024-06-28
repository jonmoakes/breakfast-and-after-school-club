import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

import useGetRequestDateDataSelectors from "../../get-selectors/use-get-request-date-data-selectors";
import useGetBookedSessionsUserSelectors from "../../get-selectors/use-get-booked-sessions-user-selectors";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUsersChildrenSelectors from "../../get-selectors/use-get-users-children-selectors";

import { requestAllDatesForCurrentMonthAsync } from "../../../store/request-date-data/request-date-data.thunks";
import { getUsersChildrenAsync } from "../../../store/get-users-children/get-users-children.thunks";
import { fetchBookedSessionsUserFromTodayOnwardsAsync } from "../../../store/booked-sessions-user/booked-sessions-user.thunks";

const useGetCurrentMonthDateDataUsersChildrenAndBookedSessionsUserUseEffect =
  () => {
    const {
      databaseId,
      termDatesCollectionId,
      childrenCollectionId,
      id,
      bookedSessionsCollectionId,
    } = useGetCurrentUserSelectors();
    const { getUsersChildrenError } = useGetUsersChildrenSelectors();
    const { requestDateDataError } = useGetRequestDateDataSelectors();
    const { bookedSessionsUserError } = useGetBookedSessionsUserSelectors();

    const dispatch = useDispatch();

    const date = new Date();
    const monthNumericString = format(date, "MM");
    const yearNumericString = format(date, "yyyy");

    useEffect(() => {
      if (
        !monthNumericString ||
        !yearNumericString ||
        getUsersChildrenError ||
        requestDateDataError ||
        bookedSessionsUserError
      )
        return;

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
          const collectionId = childrenCollectionId;
          dispatch(
            getUsersChildrenAsync({
              id,
              databaseId,
              collectionId,
            })
          ).then((resultAction) => {
            if (getUsersChildrenAsync.fulfilled.match(resultAction)) {
              dispatch(
                fetchBookedSessionsUserFromTodayOnwardsAsync({
                  id,
                  databaseId,
                  bookedSessionsCollectionId,
                })
              );
            }
          });
        }
      });
    }, [
      databaseId,
      termDatesCollectionId,
      dispatch,
      monthNumericString,
      yearNumericString,
      childrenCollectionId,
      id,
      getUsersChildrenError,
      requestDateDataError,
      bookedSessionsUserError,
      bookedSessionsCollectionId,
    ]);
  };

export default useGetCurrentMonthDateDataUsersChildrenAndBookedSessionsUserUseEffect;
