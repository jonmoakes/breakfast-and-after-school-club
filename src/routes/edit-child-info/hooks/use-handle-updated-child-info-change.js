import { useState } from "react";
import { useSelector } from "react-redux";

import { selectEditChildInfo } from "../../../store/edit-child-info/edit-child-info.selector";

const useHandleUpdatedChildInfoChange = () => {
  const originalChildEntry = useSelector(selectEditChildInfo);

  const [updatedChildInfo, setUpdatedChildInfo] = useState({
    $id: originalChildEntry ? originalChildEntry.$id : "",
    childName: originalChildEntry ? originalChildEntry.childName : "",
    age: originalChildEntry ? originalChildEntry.age : "",
    medicalInfo: originalChildEntry ? originalChildEntry.medicalInfo : "",
    dietryRequirements: originalChildEntry
      ? originalChildEntry.dietryRequirements
      : "",
    additionalInfo: originalChildEntry ? originalChildEntry.additionalInfo : "",
  });

  const handleUpdatedChildInfoChange = (event) => {
    const { name, value } = event.target;
    setUpdatedChildInfo({ ...updatedChildInfo, [name]: value });
  };

  return { handleUpdatedChildInfoChange, updatedChildInfo };
};

export default useHandleUpdatedChildInfoChange;
