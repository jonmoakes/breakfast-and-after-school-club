import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { updateSessionSpacesDocAsync } from "../../../store/database-management/database-management-thunks";
import { databaseManagementUpdateSessionSpacesRoute } from "../../../strings/routes/routes-strings";

const useUpdateSessionSpacesDocsThunk = () => {
  const { databaseId, termDatesCollectionId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateSessionSpacesDocsThunk = (
    numberOfChildrenInBooking,
    date,
    sessionType
  ) => {
    const route = databaseManagementUpdateSessionSpacesRoute;
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
  };

  return { updateSessionSpacesDocsThunk };
};

export default useUpdateSessionSpacesDocsThunk;
