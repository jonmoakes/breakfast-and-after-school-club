import { useSelector, useDispatch } from "react-redux";

import { setNewPasswordDetails } from "../../../store/forgot-password-result/forgot-password-result.slice";
import { selectNewPasswordDetails } from "../../../store/forgot-password-result/forgot-password-result.selector";

const useHandleResetPasswordFormChange = () => {
  const newPasswordDetails = useSelector(selectNewPasswordDetails);
  const dispatch = useDispatch();

  const handleResetPasswordFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setNewPasswordDetails({ ...newPasswordDetails, [name]: value }));
  };

  return { handleResetPasswordFormChange };
};

export default useHandleResetPasswordFormChange;
