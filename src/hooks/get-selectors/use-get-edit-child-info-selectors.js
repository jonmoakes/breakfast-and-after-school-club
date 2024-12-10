import { useSelector } from "react-redux";
import { selectEditChildInfoSelectors } from "../../store/edit-child-info/edit-child-info.slice";

const useGetEditChildInfoSelectors = () => {
  const {
    editChildInfoIsLoading,
    childToEditInfo,
    editChildInfoResult,
    editChildInfoError,
  } = useSelector(selectEditChildInfoSelectors);

  const {
    $id,
    childName = "",
    age = "",
    consent = "",
    medicalInfo = "",
    dietaryRequirements = "",
    additionalInfo = "",
  } = childToEditInfo || {}; // Use an empty object as a fallback if originalChildInfo is undefined

  return {
    editChildInfoIsLoading,
    childToEditInfo,
    editChildInfoResult,
    editChildInfoError,
    $id,
    childName,
    age,
    consent,
    medicalInfo,
    dietaryRequirements,
    additionalInfo,
  };
};

export default useGetEditChildInfoSelectors;
