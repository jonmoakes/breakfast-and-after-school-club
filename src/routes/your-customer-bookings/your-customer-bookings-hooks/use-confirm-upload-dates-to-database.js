import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { uploadDatesToDatabaseAsync } from "../../../store/upload-dates-to-database/upload-dates-to-database.slice";

import { imSureMessage } from "../../../strings/strings";
import { termDates2023And2024 } from "../2023-24-dates/23-24-dates";

const useConfirmUploadDatesToDatabase = () => {
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const collectionId = import.meta.env.VITE_2023_2024_TERM_DATES_COLLECTION_ID;
  const datesList = termDates2023And2024;

  const confirmResult = () => {
    dispatch(uploadDatesToDatabaseAsync({ datesList, collectionId }));
  };

  const confirmUploadDatesToDatabase = () => {
    confirmSwal(
      "do you want to upload these dates?",
      "",
      imSureMessage,
      confirmResult
    );
  };

  return { confirmUploadDatesToDatabase };
};

export default useConfirmUploadDatesToDatabase;
