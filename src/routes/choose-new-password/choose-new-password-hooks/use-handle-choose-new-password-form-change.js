import { useSelector, useDispatch } from "react-redux";

import {
  setNewPasswordDetails,
  selectChooseNewPasswordSelectors,
} from "../../../store/choose-new-password/choose-new-password.slice";

const useHandleChooseNewPasswordFormChange = () => {
  const { newPasswordDetails } = useSelector(selectChooseNewPasswordSelectors);
  const dispatch = useDispatch();

  const handleChooseNewPasswordFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setNewPasswordDetails({ ...newPasswordDetails, [name]: value }));
  };

  return { handleChooseNewPasswordFormChange };
};

export default useHandleChooseNewPasswordFormChange;
