import { useDispatch, useSelector } from "react-redux";

import { selectContactFormDetails } from "../../../store/contact-form/contact-form.selector";
import { setContactFormDetails } from "../../../store/contact-form/contact-form.slice";

const useHandleContactFormDetailsChange = () => {
  const contactFormDetails = useSelector(selectContactFormDetails);
  const dispatch = useDispatch();

  const handleContactFormDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setContactFormDetails({ ...contactFormDetails, [name]: value }));
  };

  return { handleContactFormDetailsChange };
};

export default useHandleContactFormDetailsChange;
