import { useSelector } from "react-redux";
import { selectGetUsersChildrenSelectors } from "../../store/get-users-children/get-users-children.slice";

const useGetUsersChildrenSelectors = () => {
  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);

  return { usersChildren };
};

export default useGetUsersChildrenSelectors;
