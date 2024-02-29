import { useDispatch, useSelector } from "react-redux";

import {
  setUpdateEmailDetails,
  selectUpdateEmailSelectors,
} from "../../../store/update-email/update-email.slice";

const useHandleUpdateEmailDetails = () => {
  const { updateEmailDetails } = useSelector(selectUpdateEmailSelectors);
  const dispatch = useDispatch();

  const handleUpdateEmailDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setUpdateEmailDetails({ ...updateEmailDetails, [name]: value }));
  };

  return { handleUpdateEmailDetailsChange };
};

export default useHandleUpdateEmailDetails;
