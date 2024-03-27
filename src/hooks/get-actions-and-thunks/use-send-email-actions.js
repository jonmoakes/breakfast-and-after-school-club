import { useDispatch } from "react-redux";

import { resetSendEmailState } from "../../store/send-email/send-email.slice";

const useSendEmailActions = () => {
  const dispatch = useDispatch();

  const dispatchResetSendEmailState = () => {
    dispatch(resetSendEmailState());
  };

  return { dispatchResetSendEmailState };
};

export default useSendEmailActions;
