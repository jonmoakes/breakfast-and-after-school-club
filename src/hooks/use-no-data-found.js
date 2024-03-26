import { useLocation } from "react-router-dom";
import useGetAllChildrenSelectors from "./get-selectors/use-get-all-children-selectors";
import useGetAllUsersSelectors from "./get-selectors/use-get-all-users-selectors";
import {
  allChildrenRoute,
  allUsersRoute,
} from "../strings/routes/routes-strings";

const useNoDataFound = () => {
  const { allUsers } = useGetAllUsersSelectors();
  const { allChildren } = useGetAllChildrenSelectors();

  const location = useLocation();
  const path = location.pathname;

  const noDataFound = (data) => {
    switch (path) {
      case allUsersRoute:
        return allUsers !== undefined && !allUsers.length && !data.length
          ? true
          : false;
      case allChildrenRoute:
        return allChildren !== undefined && !allChildren.length && !data.length
          ? true
          : false;
      default:
        return false;
    }
  };

  // need to check for undefined because if api call is fulfilled but there is no data, the data will be undefined as opposed to being null of there is an error when firing the thunk.
  const allUsersIsUndefined = allUsers === undefined ? true : false;
  const allChildrenIsUndefined = allChildren === undefined ? true : false;

  return { noDataFound, allUsersIsUndefined, allChildrenIsUndefined };
};

export default useNoDataFound;
