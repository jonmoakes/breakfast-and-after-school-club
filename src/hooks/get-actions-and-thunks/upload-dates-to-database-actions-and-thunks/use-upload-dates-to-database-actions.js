import { useDispatch } from "react-redux";
import {
  resetUploadDatesToDatabaseError,
  resetUploadDatesToDatabaseResult,
} from "../../../store/upload-dates-to-database/upload-dates-to-database.slice";

const useUploadDatesToDatabaseActions = () => {
  const dispatch = useDispatch();

  const dispatchResetUploadDatesToDatabaseResult = () => {
    dispatch(resetUploadDatesToDatabaseResult());
  };

  const dispatchResetUploadDatesToDatabaseError = () => {
    dispatch(resetUploadDatesToDatabaseError());
  };

  return {
    dispatchResetUploadDatesToDatabaseResult,
    dispatchResetUploadDatesToDatabaseError,
  };
};

export default useUploadDatesToDatabaseActions;
