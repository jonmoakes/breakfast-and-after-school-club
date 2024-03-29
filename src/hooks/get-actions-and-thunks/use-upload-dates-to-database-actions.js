import { useDispatch } from "react-redux";

import {
  resetUploadDatesToDatabaseError,
  resetUploadDatesToDatabaseSuccessMessage,
} from "../../store/upload-dates-to-database/upload-dates-to-database.slice";

const useUploadDatesToDatabaseActions = () => {
  const dispatch = useDispatch();

  const dispatchResetUploadDatesToDatabaseSuccessMessage = () => {
    dispatch(resetUploadDatesToDatabaseSuccessMessage());
  };

  const dispatchResetUploadDatesToDatabaseError = () => {
    dispatch(resetUploadDatesToDatabaseError());
  };

  return {
    dispatchResetUploadDatesToDatabaseSuccessMessage,
    dispatchResetUploadDatesToDatabaseError,
  };
};

export default useUploadDatesToDatabaseActions;
