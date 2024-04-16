import useUploadDatesToDatabaseThunk from "../../../hooks/get-actions-and-thunks/upload-dates-to-database-actions-and-thunks/upload-dates-to-database-thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  confirmUploadDatesMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmUploadDatesToDatabase = () => {
  const { uploadDatesToDatabaseThunk } = useUploadDatesToDatabaseThunk();
  const { confirmSwal } = useConfirmSwal();

  const confirmResult = () => {
    uploadDatesToDatabaseThunk();
  };

  const confirmUploadDatesToDatabase = () => {
    confirmSwal(confirmUploadDatesMessage, "", imSureMessage, confirmResult);
  };

  return { confirmUploadDatesToDatabase };
};

export default useConfirmUploadDatesToDatabase;
