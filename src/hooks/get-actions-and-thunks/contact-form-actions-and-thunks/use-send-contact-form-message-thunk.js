import { useDispatch } from "react-redux";

import { sendContactFormMessageAsync } from "../../../store/contact-form/contact-form.thunks";
import useGetContactFormSelectors from "../../get-selectors/use-get-contact-form-selectors";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

const useSendContactFormMessageThunk = () => {
  const { name, email, message } = useGetContactFormSelectors();
  const { appOwnerEmail, currentUserEmailForContactForm } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const sendContactFormMessageThunk = () => {
    dispatch(
      sendContactFormMessageAsync({
        currentUserEmailForContactForm,
        appOwnerEmail,
        name,
        email,
        message,
      })
    );
  };

  return { sendContactFormMessageThunk };
};

export default useSendContactFormMessageThunk;
