import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  requestFacebookSignInAsync,
  requestGoogleSignInAsync,
} from "../../../store/user/user.thunks";

import {
  selectCurrentUserSelectors,
  setSchoolCodeForSocialLogin,
} from "../../../store/user/user.slice";

import {
  invalidSchoolCode,
  invalidSchoolCodeHelpMessage,
} from "../../../strings/errors/errors-strings";

import { isNotValidSchoolCode } from "../../../functions/is-not-valid-school-code";

const useSignInWithSocials = () => {
  const { fireSwal } = useFireSwal();

  const { schoolCodeForSocialLogin } = useSelector(selectCurrentUserSelectors);

  const dispatch = useDispatch();

  const handleChangeForSchoolCode = (event) => {
    dispatch(setSchoolCodeForSocialLogin(event.target.value));
  };

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

  return { handleChangeForSchoolCode, signInWithFacebook, signInWithGoogle };
};

export default useSignInWithSocials;
