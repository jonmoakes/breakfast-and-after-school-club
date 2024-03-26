import { useDispatch } from "react-redux";

import {
  resetGetUsersChildrenState,
  resetUsersChildrenError,
  setUsersChildren,
} from "../../../store/get-users-children/get-users-children.slice";

const useGetUsersChildrenActions = () => {
  const dispatch = useDispatch();

  const dispatchSetUsersChildren = (updatedChildren) => {
    dispatch(setUsersChildren(updatedChildren));
  };

  const dispatchResetUsersChildrenError = () => {
    dispatch(resetUsersChildrenError());
  };

  const dispatchResetUsersChildrenState = () => {
    dispatch(resetGetUsersChildrenState());
  };

  return {
    dispatchSetUsersChildren,
    dispatchResetUsersChildrenError,
    dispatchResetUsersChildrenState,
  };
};

export default useGetUsersChildrenActions;
