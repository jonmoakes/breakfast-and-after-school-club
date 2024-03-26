import { useSelector } from "react-redux";
import { selectGetUsersChildrenSelectors } from "../../store/get-users-children/get-users-children.slice";

const useGetUsersChildrenSelectors = () => {
  const { getUsersChildrenIsLoading, usersChildren, getUsersChildrenError } =
    useSelector(selectGetUsersChildrenSelectors);

  return {
    getUsersChildrenIsLoading,
    usersChildren,
    getUsersChildrenError,
  };
};

export default useGetUsersChildrenSelectors;
