import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectUploadDatesToDatabaseSuccessMessage,
  selectUploadDatesToDatabaseErrorMessage,
} from "../../../store/upload-dates-to-database/upload-dates-to-database.selector";
import {
  resetErrorMessage,
  resetSuccessMessage,
} from "../../../store/upload-dates-to-database/upload-dates-to-database.slice";

import { errorUploadingDatesToDatabaseMessage } from "../../../strings/errors/errors-strings";

const useUploadDatesToDatabaseSwal = () => {
  const { fireSwal } = useFireSwal();

  const uploadDatesSuccessMessage = useSelector(
    selectUploadDatesToDatabaseSuccessMessage
  );
  const uploadDatesErrorMessage = useSelector(
    selectUploadDatesToDatabaseErrorMessage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (uploadDatesSuccessMessage !== "") {
      fireSwal("success", uploadDatesSuccessMessage, "", 0, true, false);
      dispatch(resetSuccessMessage());
    } else if (uploadDatesErrorMessage !== "") {
      fireSwal(
        "error",
        errorUploadingDatesToDatabaseMessage,
        `the error received was: '${uploadDatesErrorMessage}'.please try again`,
        0,
        true,
        false
      );
      dispatch(resetErrorMessage());
    }
  }, [dispatch, fireSwal, uploadDatesErrorMessage, uploadDatesSuccessMessage]);
};

export default useUploadDatesToDatabaseSwal;
