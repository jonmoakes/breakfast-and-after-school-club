import { useDispatch, useSelector } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { uploadDatesToDatabaseAsync } from "../../../store/upload-dates-to-database/upload-dates-to-database.slice";

import { imSureMessage } from "../../../strings/confirms/confirms-strings";

import { termDates2023And2024 } from "../2023-24-dates/23-24-dates";

const useConfirmUploadDatesToDatabase = () => {
  const { confirmSwal } = useConfirmSwal();

  const { currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const { databaseId, termDatesCollectionId: collectionId } =
    currentUserEnvironmentVariables;
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
