import { useDispatch } from "react-redux";

import {
  setEmergencyContactDetails,
  setEmergencyContactDetailsTwo,
  resetEmergencyContactDetailsResult,
  resetEmergencyContactDetailsError,
  resetEmergencyContactDetailsState,
} from "../../../store/emergency-contact-details/emergency-contact-details.slice";

const useEmergencyContactDetailsActions = () => {
  const dispatch = useDispatch();

  const handleManageEmergencyContactDetailsChange = (event) => {
    const { value } = event.target;
    dispatch(setEmergencyContactDetails(value));
  };

  const handleManageEmergencyContactDetailsTwoChange = (event) => {
    const { value } = event.target;
    dispatch(setEmergencyContactDetailsTwo(value));
  };

  const dispatchResetEmergencyContactDetailsResult = () => {
    dispatch(resetEmergencyContactDetailsResult());
  };

  const dispatchResetEmergencyContactDetailsError = () => {
    dispatch(resetEmergencyContactDetailsError());
  };

  const dispatchResetEmergencyContactDetailsState = () => {
    dispatch(resetEmergencyContactDetailsState());
  };

  return {
    handleManageEmergencyContactDetailsChange,
    handleManageEmergencyContactDetailsTwoChange,
    dispatchResetEmergencyContactDetailsResult,
    dispatchResetEmergencyContactDetailsError,
    dispatchResetEmergencyContactDetailsState,
  };
};

export default useEmergencyContactDetailsActions;
