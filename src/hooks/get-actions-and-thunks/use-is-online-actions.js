import { useDispatch } from "react-redux";

import {
  resetIsOnlineState,
  setOnlineStatus,
} from "../../store/is-online/is-online.slice";

const useIsOnlineActions = () => {
  const dispatch = useDispatch();

  const dispatchSetOnlineStatus = (payload) => {
    dispatch(setOnlineStatus(payload));
  };

  const dispatchResetIsOnlineState = () => {
    dispatch(resetIsOnlineState());
  };

  return { dispatchSetOnlineStatus, dispatchResetIsOnlineState };
};

export default useIsOnlineActions;
