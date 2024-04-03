import { useDispatch } from "react-redux";

import { generateNewPasswordRequestAsync } from "../../../store/generate-new-password-request/generate-new-password-request.thunks";

const useGenerateNewPasswordRequestThunk = () => {
  const dispatch = useDispatch();

  const generateNewPasswordRequestThunk = (generateNewPasswordRequestEmail) => {
    dispatch(
      generateNewPasswordRequestAsync({ generateNewPasswordRequestEmail })
    );
  };

  return { generateNewPasswordRequestThunk };
};

export default useGenerateNewPasswordRequestThunk;
