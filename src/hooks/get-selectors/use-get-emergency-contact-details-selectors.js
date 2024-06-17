import { useSelector } from "react-redux";

import { selectEmergencyContactDetailsSelectors } from "../../store/emergency-contact-details/emergency-contact-details.slice";

const useGetEmergencyContactDetailsSelectors = () => {
  const {
    emergencyContactDetailsIsLoading,
    emergencyContactDetails,
    emergencyContactDetailsResult,
    emergencyContactDetailsError,
    retrievedEmergencyContactDetails,
    retrievedEmergencyContactDetailsResult,
    retrievedEmergencyContactDetailsError,
  } = useSelector(selectEmergencyContactDetailsSelectors);

  return {
    emergencyContactDetailsIsLoading,
    emergencyContactDetails,
    emergencyContactDetailsResult,
    emergencyContactDetailsError,
    retrievedEmergencyContactDetails,
    retrievedEmergencyContactDetailsResult,
    retrievedEmergencyContactDetailsError,
  };
};

export default useGetEmergencyContactDetailsSelectors;
