import { useState } from "react";

const useTogglePasswordVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmIsVisible(!confirmIsVisible);
  };

  return {
    isVisible,
    confirmIsVisible,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    setIsVisible,
    setConfirmIsVisible,
  };
};

export default useTogglePasswordVisibility;
