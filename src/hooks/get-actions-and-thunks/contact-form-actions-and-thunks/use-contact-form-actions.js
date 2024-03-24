import { useDispatch } from "react-redux";

import useGetContactFormSelectors from "../../get-selectors/use-get-contact-form-selectors";

import {
  resetContactFormState,
  setContactFormDefaultName,
  setContactFormDefaultEmail,
  setContactFormDetails,
} from "../../../store/contact-form/contact-form.slice";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

const useContactFormActions = () => {
  const { contactFormDetails } = useGetContactFormSelectors();
  const { name, email } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const dispatchHandleContactFormDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setContactFormDetails({ ...contactFormDetails, [name]: value }));
  };

  const dispatchSetContactFormDefaultName = () => {
    dispatch(setContactFormDefaultName(name));
  };

  const dispatchSetContactFormDefaultEmail = () => {
    dispatch(setContactFormDefaultEmail(email));
  };

  const dispatchResetContactFormState = () => {
    dispatch(resetContactFormState());
  };

  return {
    dispatchHandleContactFormDetailsChange,
    dispatchResetContactFormState,
    dispatchSetContactFormDefaultName,
    dispatchSetContactFormDefaultEmail,
  };
};

export default useContactFormActions;
