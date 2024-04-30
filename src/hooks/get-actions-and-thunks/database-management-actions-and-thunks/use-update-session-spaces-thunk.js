import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { updateSessionSpacesDocAsync } from "../../../store/database-management/database-management-thunks";

const useUpdateSessionSpacesDocsThunk = () => {
  const { databaseId, termDatesCollectionId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateSessionSpacesDocsThunk = (
    numberOfChildrenInBooking,
    date,
    sessionType
  ) => {
    dispatch(
      updateSessionSpacesDocAsync({
        numberOfChildrenInBooking,
        date,
        databaseId,
        termDatesCollectionId,
        sessionType,
      })
    );
  };

  return { updateSessionSpacesDocsThunk };
};

export default useUpdateSessionSpacesDocsThunk;
