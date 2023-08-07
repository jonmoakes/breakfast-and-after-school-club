import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signInMagicUrlAsync } from "../../store/user/user.actions";
import { selectMagicUrlRequestResult } from "../../store/magic-url-request/magic-url-request.selector";

const useGetMagicUrlResult = () => {
  const magicUrlRequestResult = useSelector(selectMagicUrlRequestResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signInMagicUrlAsync());
  }, [dispatch, magicUrlRequestResult]);
};

export default useGetMagicUrlResult;
