import { useDispatch } from "react-redux";

import {
  setEmergencyContactDetails,
  resetEmergencyContactDetailsResult,
  resetEmergencyContactDetailsError,
  resetRetrievedEmergencyContactDetailsResult,
  resetRetrievedEmergencyContactDetailsError,
  resetEmergencyContactDetailsState,
} from "../../../store/emergency-contact-details/emergency-contact-details.slice";

const useEmergencyContactDetailsActions = () => {
  const dispatch = useDispatch();

  const handleManageEmergencyContactDetailsChange = (event) => {
    const { value } = event.target;
    dispatch(setEmergencyContactDetails(value));
  };

  const dispatchResetEmergencyContactDetailsResult = () => {
    dispatch(resetEmergencyContactDetailsResult());
  };

  const dispatchResetRetreivedEmergencyContactDetailsError = () => {
    dispatch(resetRetrievedEmergencyContactDetailsError());
  };

  const dispatchResetRetreivedEmergencyContactDetailsResult = () => {
    dispatch(resetRetrievedEmergencyContactDetailsResult());
  };

  const dispatchResetEmergencyContactDetailsError = () => {
    dispatch(resetEmergencyContactDetailsError());
  };

  const dispatchResetEmergencyContactDetailsState = () => {
    dispatch(resetEmergencyContactDetailsState());
  };

  return {
    handleManageEmergencyContactDetailsChange,
    dispatchResetEmergencyContactDetailsResult,
    dispatchResetEmergencyContactDetailsError,
    dispatchResetRetreivedEmergencyContactDetailsResult,
    dispatchResetRetreivedEmergencyContactDetailsError,
    dispatchResetEmergencyContactDetailsState,
  };
};

export default useEmergencyContactDetailsActions;
