import { useDispatch } from "react-redux";

import useGetUpdateEmailSelectors from "../../get-selectors/use-get-update-email-selectors";

import {
  resetUpdateEmailError,
  resetUpdateEmailResult,
  resetUpdateEmailState,
  setUpdateEmailDetails,
} from "../../../store/update-email/update-email.slice";

const useUpdateEmailActions = () => {
  const { updateEmailDetails } = useGetUpdateEmailSelectors();
  const dispatch = useDispatch();

  const dispatchHandleUpdateEmailDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setUpdateEmailDetails({ ...updateEmailDetails, [name]: value }));
  };

  const dispatchResetUpdateEmailError = () => {
    dispatch(resetUpdateEmailError());
  };

  const dispatchResetUpdateEmailResult = () => {
    dispatch(resetUpdateEmailResult());
  };

  const dispatchResetUpdateEmailState = () => {
    dispatch(resetUpdateEmailState());
  };

  return {
    dispatchHandleUpdateEmailDetailsChange,
    dispatchResetUpdateEmailError,
    dispatchResetUpdateEmailResult,
    dispatchResetUpdateEmailState,
  };
};

export default useUpdateEmailActions;
