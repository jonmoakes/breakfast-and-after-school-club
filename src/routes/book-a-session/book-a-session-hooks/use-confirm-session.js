import { useDispatch } from "react-redux";

import useConfirmBookSession from "./use-confirm-book-session";
import { setSessionType } from "../../../store/book-session/book-session.slice";

const useConfirmSession = () => {
  const { confirmBookSession } = useConfirmBookSession();

  const dispatch = useDispatch();

  const confirmSession = (sessionType, price) => {
    dispatch(setSessionType(sessionType));
    confirmBookSession(sessionType, price);
  };

  return { confirmSession };
};

export default useConfirmSession;
