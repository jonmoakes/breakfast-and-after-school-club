import { useState } from "react";

const useShowOrHideElement = () => {
  const [show, setShow] = useState(false);

  const showElement = () => {
    setShow(true);
  };

  const hideElement = () => {
    setShow(false);
  };

  const toggleShowHideElement = () => {
    setShow(!show);
  };

  return { show, showElement, hideElement, toggleShowHideElement };
};

export default useShowOrHideElement;
