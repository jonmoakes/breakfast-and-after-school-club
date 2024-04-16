import { useDispatch } from "react-redux";
import {
  requestFacebookSignInAsync,
  requestGoogleSignInAsync,
} from "../../../store/user/user.thunks";
import { setProjectId } from "../../../school-codes-list/get-ids-from-school-code/set-project-id";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

const useRequestSocialSignInThunks = () => {
  const { schoolCodeForSocialLogin: schoolCode } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const signInWithFacebookThunk = () => {
    setProjectId(schoolCode);
    dispatch(requestFacebookSignInAsync());
  };

  const signInWithGoogleThunk = () => {
    setProjectId(schoolCode);
    dispatch(requestGoogleSignInAsync());
  };

  return { signInWithFacebookThunk, signInWithGoogleThunk };
};

export default useRequestSocialSignInThunks;
