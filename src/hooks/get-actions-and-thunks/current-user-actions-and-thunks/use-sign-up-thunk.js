import { useDispatch } from "react-redux";
import useGetSignUpFormSelectors from "../../get-selectors/use-get-sign-up-form-selectors";
import { signUpAsync } from "../../../store/user/user.thunks";

import { setProjectId } from "../../../school-codes-list/get-ids-from-school-code/set-project-id";

const useSignUpThunk = () => {
  const { name, email, phoneNumber, schoolCode, password } =
    useGetSignUpFormSelectors();

  const dispatch = useDispatch();

  const signUpThunk = () => {
    setProjectId(schoolCode);
    dispatch(signUpAsync({ email, password, name, schoolCode, phoneNumber }));
  };

  return { signUpThunk };
};

export default useSignUpThunk;
