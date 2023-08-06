import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import { selectSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.selector";
import { signInAsync } from "../../../store/user/user.actions";

import { validateEmail } from "../../../functions/validate-email";

import {
  invalidEmailErrorMessage,
  missingFieldsMessage,
} from "../../../strings/strings";

const useHandleSignInFormSubmit = () => {
  const { fireSwal } = useFireSwal();

  const signInFormDetails = useSelector(selectSignInFormDetails);
  const dispatch = useDispatch();
  const { email, password } = signInFormDetails;

  const handleSignInFormSubmit = async () => {
    if (!email || !password) {
      fireSwal("error", missingFieldsMessage, "", 0, true, false);
    } else if (!validateEmail(email)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
    } else {
      dispatch(signInAsync({ email, password }));
    }
  };

  return { handleSignInFormSubmit };
};

export default useHandleSignInFormSubmit;
