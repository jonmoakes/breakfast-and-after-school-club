import { useSelector } from "react-redux";
import { selectGetUsersChildrenSelectors } from "../../store/get-users-children/get-users-children.slice";

const useGetUsersChildrenSelectors = () => {
  const { getUsersChildrenIsLoading, usersChildren, getUsersChildrenError } =
    useSelector(selectGetUsersChildrenSelectors);

  const childName = usersChildren ? usersChildren[0] : "";

  return {
    getUsersChildrenIsLoading,
    usersChildren,
    getUsersChildrenError,
    childName,
  };
};

export default useGetUsersChildrenSelectors;
