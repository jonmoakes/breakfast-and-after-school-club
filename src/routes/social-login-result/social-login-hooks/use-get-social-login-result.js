import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signInWithSocialAsync } from "../../../store/user/user.actions";
import { selectCurrentUser } from "../../../store/user/user.selector";

const useGetSocialLoginResult = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) return;
    dispatch(signInWithSocialAsync());
  }, [dispatch, currentUser]);
};

export default useGetSocialLoginResult;
