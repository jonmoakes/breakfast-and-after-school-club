import { useDispatch } from "react-redux";

import { signInWithSocialAsync } from "../../store/user/user.slice";
import { useEffect } from "react";

const useGetSocialLoginResult = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signInWithSocialAsync());
  }, [dispatch]);
};

export default useGetSocialLoginResult;
