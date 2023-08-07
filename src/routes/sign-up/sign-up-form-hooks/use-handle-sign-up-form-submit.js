import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";
import { signUpAsync } from "../../../store/user/user.actions";

import { validateEmail } from "../../../functions/validate-email";

import {
  invalidEmailErrorMessage,
  missingFieldsMessage,
  passwordsDontMatchMessage,
} from "../../../strings/strings";

const useHandleSignUpFormSubmit = () => {
  const { fireSwal } = useFireSwal();

  const signUpFormDetails = useSelector(selectSignUpFormDetails);
  const dispatch = useDispatch();
  const { name, email, password, confirmPassword } = signUpFormDetails;

  const handleSignUpFormSubmit = () => {
    if (!name || !email || !password || !confirmPassword) {
      fireSwal("error", missingFieldsMessage, "", 0, true, false);
    } else if (!validateEmail(email)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
    } else if (password !== confirmPassword) {
      fireSwal("error", passwordsDontMatchMessage, "", 0, true, false);
    } else {
      dispatch(signUpAsync({ email, password, name }));
    }
  };

  return { handleSignUpFormSubmit };
};

export default useHandleSignUpFormSubmit;
