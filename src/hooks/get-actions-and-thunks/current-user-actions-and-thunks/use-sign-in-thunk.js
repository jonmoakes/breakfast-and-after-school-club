import { useDispatch } from "react-redux";

import { signInAsync } from "../../../store/user/user.thunks";
import useGetSignInFormSelectors from "../../get-selectors/use-get-sign-in-form-selectors";
import { setProjectId } from "../../../school-codes-list/get-ids-from-school-code/set-project-id";

const useSignInThunk = () => {
  const { email, password, schoolCode } = useGetSignInFormSelectors();

  const dispatch = useDispatch();

  const signInThunk = () => {
    setProjectId(schoolCode);
    dispatch(signInAsync({ email, password, schoolCode }));
  };

  return { signInThunk };
};

export default useSignInThunk;
