import { useEffect } from "react";

import useFireSwal from "../../../hooks/use-fire-swal";
import useGetUploadDatesToDatabaseSelectors from "../../../hooks/get-selectors/use-get-upload-dates-to-database-selectors";
import useUploadDatesToDatabaseActions from "../../../hooks/get-actions-and-thunks/upload-dates-to-database-actions-and-thunks/use-upload-dates-to-database-actions";

import {
  errorUploadingDatesToDatabaseMessage,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";
import { datesUploadedToDatabaseSuccessMessage } from "../../../strings/successes/successes-strings";

const useUploadDatesToDatabaseSwal = () => {
  const { uploadDatesToDatabaseResult, uploadDatesToDatabaseError } =
    useGetUploadDatesToDatabaseSelectors();

  const {
    dispatchResetUploadDatesToDatabaseResult,
    dispatchResetUploadDatesToDatabaseError,
  } = useUploadDatesToDatabaseActions();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!uploadDatesToDatabaseResult && !uploadDatesToDatabaseError) return;
    if (uploadDatesToDatabaseResult === "fulfilled") {
      fireSwal(
        "success",
        datesUploadedToDatabaseSuccessMessage,
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUploadDatesToDatabaseResult();
        }
      });
    } else {
      const error = uploadDatesToDatabaseError;
      fireSwal(
        "error",
        errorUploadingDatesToDatabaseMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUploadDatesToDatabaseResult();
          dispatchResetUploadDatesToDatabaseError();
        }
      });
    }
  }, [
    fireSwal,
    uploadDatesToDatabaseResult,
    uploadDatesToDatabaseError,
    dispatchResetUploadDatesToDatabaseResult,
    dispatchResetUploadDatesToDatabaseError,
  ]);
};

export default useUploadDatesToDatabaseSwal;
