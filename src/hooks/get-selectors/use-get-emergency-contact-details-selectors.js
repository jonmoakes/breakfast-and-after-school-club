import { useSelector } from "react-redux";

import { selectEmergencyContactDetailsSelectors } from "../../store/emergency-contact-details/emergency-contact-details.slice";

const useGetEmergencyContactDetailsSelectors = () => {
  const {
    emergencyContactDetailsIsLoading,
    emergencyContactDetails,
    emergencyContactDetailsTwo,
    manageEmergencyContactDetailsResult,
    manageEmergencyContactDetailsError,
    retrievedEmergencyContactDetails,
    retrievedEmergencyContactDetailsTwo,
    retrievedEmergencyContactDetailsResult,
    retrievedEmergencyContactDetailsError,
  } = useSelector(selectEmergencyContactDetailsSelectors);

  return {
    emergencyContactDetailsIsLoading,
    emergencyContactDetails,
    emergencyContactDetailsTwo,
    manageEmergencyContactDetailsResult,
    manageEmergencyContactDetailsError,
    retrievedEmergencyContactDetails,
    retrievedEmergencyContactDetailsTwo,
    retrievedEmergencyContactDetailsResult,
    retrievedEmergencyContactDetailsError,
  };
};

export default useGetEmergencyContactDetailsSelectors;
