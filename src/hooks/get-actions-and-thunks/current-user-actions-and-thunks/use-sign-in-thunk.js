import { useDispatch } from "react-redux";

import { signInAsync } from "../../../store/user/user.thunks";

import useGetSignInFormSelectors from "../../get-selectors/use-get-sign-in-form-selectors";

const useSignInThunk = () => {
  const { email, password, schoolCode } = useGetSignInFormSelectors();

  const dispatch = useDispatch();

  const signInThunk = () => {
    dispatch(signInAsync({ email, password, schoolCode }));
  };

  return { signInThunk };
};

export default useSignInThunk;
