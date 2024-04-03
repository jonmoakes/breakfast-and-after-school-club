import { useDispatch } from "react-redux";

import useGetSignUpFormSelectors from "../../get-selectors/use-get-sign-up-form-selectors";
import { signUpAsync } from "../../../store/user/user.thunks";

const useSignUpThunk = () => {
  const { name, email, phoneNumber, schoolCode, password } =
    useGetSignUpFormSelectors();

  const dispatch = useDispatch();

  const signUpThunk = () => {
    dispatch(signUpAsync({ email, password, name, schoolCode, phoneNumber }));
  };

  return { signUpThunk };
};

export default useSignUpThunk;
