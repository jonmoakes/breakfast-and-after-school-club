import { useDispatch, useSelector } from "react-redux";

import { selectUpdateEmailDetails } from "../../../store/update-email/update-email.selector";
import { setUpdateEmailDetails } from "../../../store/update-email/update-email.slice";

const useHandleUpdateEmailDetails = () => {
  const updateEmailDetails = useSelector(selectUpdateEmailDetails);
  const dispatch = useDispatch();

  const handleUpdateEmailDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setUpdateEmailDetails({ ...updateEmailDetails, [name]: value }));
  };

  return { handleUpdateEmailDetailsChange };
};

export default useHandleUpdateEmailDetails;
