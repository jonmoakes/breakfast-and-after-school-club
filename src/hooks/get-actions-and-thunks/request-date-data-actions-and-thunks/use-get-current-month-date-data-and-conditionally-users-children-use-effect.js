import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUsersChildrenSelectors from "../../get-selectors/use-get-users-children-selectors";
import { requestAllDatesForCurrentMonthAsync } from "../../../store/request-date-data/request-date-data.thunks";
import { getUsersChildrenAsync } from "../../../store/get-users-children/get-users-children.thunks";

const useGetCurrentMonthDateDataAndConditionallyUsersChildrenUseEffect = () => {
  const { databaseId, termDatesCollectionId, childrenCollectionId, id } =
    useGetCurrentUserSelectors();
  const { usersChildren, getUsersChildrenError } =
    useGetUsersChildrenSelectors();

  const dispatch = useDispatch();

  const date = new Date();
  const monthNumericString = format(date, "MM");
  const yearNumericString = format(date, "yyyy");

  useEffect(() => {
    if (!monthNumericString || !yearNumericString || getUsersChildrenError)
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
      if (
        requestAllDatesForCurrentMonthAsync.fulfilled.match(resultAction) &&
        !usersChildren.length
      ) {
        const collectionId = childrenCollectionId;
        dispatch(
          getUsersChildrenAsync({
            id,
            databaseId,
            collectionId,
          })
        );
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
    usersChildren,
    getUsersChildrenError,
  ]);
};

export default useGetCurrentMonthDateDataAndConditionallyUsersChildrenUseEffect;
