import { useDispatch } from "react-redux";

import { setMagicUrlEmail } from "../../../store/magic-url-request/magic-url-request.slice";

const useHandleMagicUrlEmailChange = () => {
  const dispatch = useDispatch();

  const handleMagicUrlEmailChange = (event) => {
    dispatch(setMagicUrlEmail(event.target.value));
  };

  return { handleMagicUrlEmailChange };
};

export default useHandleMagicUrlEmailChange;
