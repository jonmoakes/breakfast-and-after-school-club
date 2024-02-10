import { useDispatch, useSelector } from "react-redux";

import {
  setContactFormDetails,
  selectContactFormSelectors,
} from "../../../store/contact-form/contact-form.slice";

const useHandleContactFormDetailsChange = () => {
  const { contactFormDetails } = useSelector(selectContactFormSelectors);
  const dispatch = useDispatch();

  const handleContactFormDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setContactFormDetails({ ...contactFormDetails, [name]: value }));
  };

  return { handleContactFormDetailsChange };
};

export default useHandleContactFormDetailsChange;
