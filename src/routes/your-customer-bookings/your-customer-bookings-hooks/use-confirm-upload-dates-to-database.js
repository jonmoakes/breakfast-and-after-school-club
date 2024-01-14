import { useDispatch, useSelector } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectEnvironmentVariables } from "../../../store/user/user.selector";
import { uploadDatesToDatabaseAsync } from "../../../store/upload-dates-to-database/upload-dates-to-database.slice";

import { imSureMessage } from "../../../strings/strings";
import { termDates2023And2024 } from "../2023-24-dates/23-24-dates";

const useConfirmUploadDatesToDatabase = () => {
  const { confirmSwal } = useConfirmSwal();

  const envVariables = useSelector(selectEnvironmentVariables);

  const { databaseId, termDatesCollectionId: collectionId } = envVariables;
  const dispatch = useDispatch();

  const datesList = termDates2023And2024;

  const confirmResult = () => {
    dispatch(
      uploadDatesToDatabaseAsync({ datesList, databaseId, collectionId })
    );
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
