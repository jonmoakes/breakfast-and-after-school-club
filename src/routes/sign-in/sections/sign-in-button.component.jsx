import { useSelector, useDispatch } from "react-redux";
import { account } from "../../../utils/appwrite/appwrite-config";
import { useNavigate } from "react-router-dom";

// import useHandleSignUpFormSubmit from "./use-handle-sign-up-form-submit";
// import useHandleSignUpFormError from "./use-handle-sign-up-form-error";
import useIsOnline from "../../../hooks/use-is-online";

import { selectSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.selector";
import { clearSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.slice";

import NetworkError from "../../../components/errors/network-error.component";
import { GreenButton } from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { accountRoute } from "../../../strings/strings";

const SignInButton = () => {
  // const { handleSignUpFormSubmit } = useHandleSignUpFormSubmit();
  // useHandleSignUpFormError();
  const { isOnline } = useIsOnline();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signInFormDetails = useSelector(selectSignInFormDetails);

  const { email, password } = signInFormDetails;

  const signinUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(email, password);
      navigate(accountRoute);
      dispatch(clearSignInFormDetails);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOnline ? (
        <>
          <BlackHr />

          <GreenButton type="button" onClick={signinUser}>
            Sign In
          </GreenButton>
        </>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButton;
