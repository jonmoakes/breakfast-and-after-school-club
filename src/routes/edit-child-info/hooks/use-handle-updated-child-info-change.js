import { useState } from "react";
import { useSelector } from "react-redux";

import { selectEditChildInfoSelectors } from "../../../store/edit-child-info/edit-child-info.slice";

const useHandleUpdatedChildInfoChange = () => {
  const { childToEditInfo } = useSelector(selectEditChildInfoSelectors);

  const [updatedChildInfo, setUpdatedChildInfo] = useState({
    $id: childToEditInfo ? childToEditInfo.$id : "",
    childName: childToEditInfo ? childToEditInfo.childName : "",
    age: childToEditInfo ? childToEditInfo.age : "",
    medicalInfo: childToEditInfo ? childToEditInfo.medicalInfo : "",
    dietryRequirements: childToEditInfo
      ? childToEditInfo.dietryRequirements
      : "",
    additionalInfo: childToEditInfo ? childToEditInfo.additionalInfo : "",
  });

  const handleUpdatedChildInfoChange = (event) => {
    const { name, value } = event.target;
    setUpdatedChildInfo({ ...updatedChildInfo, [name]: value });
  };

  return { handleUpdatedChildInfoChange, updatedChildInfo };
};

export default useHandleUpdatedChildInfoChange;
