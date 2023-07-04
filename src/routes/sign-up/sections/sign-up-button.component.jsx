// import { useSelector } from "react-redux";

// import useHandleSignUpFormSubmit from "./use-handle-sign-up-form-submit";
// import useHandleSignUpFormError from "./use-handle-sign-up-form-error";
import useIsOnline from "../../../hooks/use-is-online";

// import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";

import NetworkError from "../../../components/errors/network-error.component";
import { GreenButton } from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SignUpButton = () => {
  // const { handleSignUpFormSubmit } = useHandleSignUpFormSubmit();
  // useHandleSignUpFormError();
  const { isOnline } = useIsOnline();

  // const signUpFormDetails = useSelector(selectSignUpFormDetails);

  // const { displayName, email, password, confirmPassword } = signUpFormDetails;

  return (
    <>
      {isOnline ? (
        <>
          <BlackHr />

          <GreenButton
          // type="button"
          // onClick={
          //   () =>
          //   // handleSignUpFormSubmit(
          //   //   displayName,
          //   //   email,
          //   //   password,
          //   //   confirmPassword
          //   // )
          // }
          >
            Sign Up
          </GreenButton>
        </>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignUpButton;
