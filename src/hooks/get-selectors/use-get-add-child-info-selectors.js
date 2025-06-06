import { useSelector } from "react-redux";

import { selectAddChildInfoSelectors } from "../../store/add-child-info/add-child-info.slice";

const useGetAddChildInfoSelectors = () => {
  const {
    addChildInfoIsLoading,
    childInfo,
    addChildInfoResult,
    addChildInfoError,
  } = useSelector(selectAddChildInfoSelectors);

  const {
    childName,
    age,
    medicalInfo,
    dietaryRequirements,
    additionalInfo,
    consent,
  } = childInfo ?? {};

  return {
    addChildInfoIsLoading,
    childInfo,
    addChildInfoResult,
    addChildInfoError,
    childName,
    age,
    medicalInfo,
    dietaryRequirements,
    additionalInfo,
    consent,
  };
};

export default useGetAddChildInfoSelectors;
