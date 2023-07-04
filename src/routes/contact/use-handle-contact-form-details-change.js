import { useState } from "react";

const defaultFormFields = {
  name: "",
  email: "",
  message: "",
};

const useHandleContactFormDetailsChange = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleContactFormDetailsChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return { formFields, resetFormFields, handleContactFormDetailsChange };
};

export default useHandleContactFormDetailsChange;
