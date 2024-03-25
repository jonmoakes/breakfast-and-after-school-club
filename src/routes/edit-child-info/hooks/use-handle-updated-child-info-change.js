import { useState } from "react";

import useEditChildInfoLogic from "./use-edit-child-info-logic";

const useHandleUpdatedChildInfoChange = () => {
  // the original values form the selector. We are using these to set the default values of updatedChildInfo so that we can show them on screen in the form before they are updated.
  const {
    $id,
    childName,
    age,
    consent,
    medicalInfo,
    dietryRequirements,
    additionalInfo,
  } = useEditChildInfoLogic();

  const [updatedChildInfo, setUpdatedChildInfo] = useState({
    $id,
    childName,
    consent,
    age,
    medicalInfo,
    dietryRequirements,
    additionalInfo,
  });

  const handleUpdatedChildInfoChange = (event) => {
    const { name, value } = event.target;
    setUpdatedChildInfo({ ...updatedChildInfo, [name]: value });
  };

  //pass the whole updatedChildInfo object to the form components and also to pass to the thunk
  return { handleUpdatedChildInfoChange, updatedChildInfo };
};

export default useHandleUpdatedChildInfoChange;
