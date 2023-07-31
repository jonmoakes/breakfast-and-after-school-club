import { useSelector, useDispatch } from "react-redux";

import { setNewPasswordDetails } from "../../../store/update-password/update-password.slice";
import { selectUpdatePasswordDetails } from "../../../store/update-password/update-password.selector";

const useHandleUpdatePasswordFormChange = () => {
  const updatePasswordDetails = useSelector(selectUpdatePasswordDetails);
  const dispatch = useDispatch();

  const handleUpdatePasswordFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(
      setNewPasswordDetails({ ...updatePasswordDetails, [name]: value })
    );
  };

  return { handleUpdatePasswordFormChange };
};

export default useHandleUpdatePasswordFormChange;
