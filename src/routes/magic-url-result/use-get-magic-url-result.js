import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signInMagicUrlAsync } from "../../store/user/user.actions";
import { selectCurrentUser } from "../../store/user/user.selector";

const useGetMagicUrlResult = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) {
      dispatch(signInMagicUrlAsync());
    }
  }, [dispatch, currentUser]);
};

export default useGetMagicUrlResult;
