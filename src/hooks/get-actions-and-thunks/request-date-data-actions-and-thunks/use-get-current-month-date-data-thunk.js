import { useDispatch } from "react-redux";
import { format } from "date-fns";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { requestAllDatesForCurrentMonthAsync } from "../../../store/request-date-data/request-date-data.thunks";

const useGetCurrentMonthDateDataThunk = () => {
  const { databaseId, termDatesCollectionId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const getCurrentMonthDateDataThunk = () => {
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
    );
  };

  return { getCurrentMonthDateDataThunk };
};

export default useGetCurrentMonthDateDataThunk;
