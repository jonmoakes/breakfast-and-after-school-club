import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  requestFacebookSignInAsync,
  requestGoogleSignInAsync,
} from "../../../store/user/user.thunks";

import {
  invalidSchoolCode,
  invalidSchoolCodeHelpMessage,
} from "../../../strings/errors/errors-strings";

import { isNotValidSchoolCode } from "../../../functions/is-not-valid-school-code";

const useSignInWithSocials = () => {
  const { schoolCodeForSocialLogin } = useGetCurrentUserSelectors();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const signInWithFacebook = () => {
    const schoolCode = schoolCodeForSocialLogin;
    if (isNotValidSchoolCode(schoolCode)) {
      fireSwal(
        "error",
        invalidSchoolCode,
        invalidSchoolCodeHelpMessage,
        0,
        true,
        false
      );
    } else {
      localStorage.setItem("schoolCode", schoolCode);
      dispatch(requestFacebookSignInAsync());
    }
  };

  const signInWithGoogle = () => {
    const schoolCode = schoolCodeForSocialLogin;

    if (isNotValidSchoolCode(schoolCode)) {
      fireSwal(
        "error",
        invalidSchoolCode,
        invalidSchoolCodeHelpMessage,
        0,
        true,
        false
      );
    } else {
      localStorage.setItem("schoolCode", schoolCode);
      dispatch(requestGoogleSignInAsync());
    }
  };

  return {
    signInWithFacebook,
    signInWithGoogle,
  };
};

export default useSignInWithSocials;
