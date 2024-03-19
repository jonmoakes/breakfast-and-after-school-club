import { useSelector } from "react-redux";
import { selectGetUsersChildrenSelectors } from "../../store/get-users-children/get-users-children.slice";

const useGetUsersChildrenSelectors = () => {
  const { getUsersChildrenIsLoading, usersChildren, getUsersChildrenError } =
    useSelector(selectGetUsersChildrenSelectors);

  const childName = usersChildren ? usersChildren[0] : "";

  const usersChildrensNames =
    usersChildren !== undefined
      ? usersChildren.map((child) => child.childName)
      : [];

  return {
    getUsersChildrenIsLoading,
    usersChildren,
    getUsersChildrenError,
    childName,
    usersChildrensNames,
  };
};

export default useGetUsersChildrenSelectors;
