import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestDateDataAsync } from "../../../store/request-date-data/request-date-data.slice";
import { selectChosenDate } from "../../../store/request-date-data/request-date-data.selector";
import { selectEnvironmentVariables } from "../../../store/user/user.selector";

const useRequestDateData = () => {
  const chosenDate = useSelector(selectChosenDate);
  const dispatch = useDispatch();

  const envVariables = useSelector(selectEnvironmentVariables);
  const { databaseId, termDatesCollectionId: collectionId } = envVariables;

  useEffect(() => {
    if (!chosenDate) return;
    dispatch(requestDateDataAsync({ databaseId, collectionId, chosenDate }));
  }, [dispatch, chosenDate, databaseId, collectionId]);
};

export default useRequestDateData;
