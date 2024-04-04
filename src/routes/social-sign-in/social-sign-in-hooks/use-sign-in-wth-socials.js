import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useRequestSocialSignInThunks from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-request-social-sign-in-thunks";

import {
  invalidSchoolCode,
  invalidSchoolCodeHelpMessage,
} from "../../../strings/errors/errors-strings";

import { isNotValidSchoolCode } from "../../../functions/is-not-valid-school-code";

const useSignInWithSocials = () => {
  const { schoolCodeForSocialLogin } = useGetCurrentUserSelectors();
  const { signInWithFacebookThunk, signInWithGoogleThunk } =
    useRequestSocialSignInThunks();
  const { fireSwal } = useFireSwal();

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
      signInWithFacebookThunk();
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
      signInWithGoogleThunk();
    }
  };

  return {
    signInWithFacebook,
    signInWithGoogle,
  };
};

export default useSignInWithSocials;
