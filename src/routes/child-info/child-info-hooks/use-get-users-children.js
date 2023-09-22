import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsersChildrenAsync } from "../../../store/get-users-children/get-users-children-slice";

import { selectCurrentUser } from "../../../store/user/user.selector";

const useGetUsersChildren = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const { email } = currentUser;

  useEffect(() => {
    dispatch(getUsersChildrenAsync({ email }));
  }, [dispatch, email]);
};

export default useGetUsersChildren;
