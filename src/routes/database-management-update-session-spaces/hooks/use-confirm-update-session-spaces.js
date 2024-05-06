import useUpdateSessionSpacesDocsThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-session-spaces-thunk";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";

import {
  confirmUpdateSessionSpacesMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";

const useConfirmUpdateSessionSpaces = () => {
  const { date, sessionType, numberOfChildrenInBooking } =
    useGetDatabaseManagementSelectors();
  const { updateSessionSpacesDocsThunk } = useUpdateSessionSpacesDocsThunk();
  const {
    isNotValidDateFormat,
    isNotValidSessionType,
    isNotValidNumberOfChildrenValue,
  } = useUpdateDocumentFunctions();
  const {
    fireEmptyValuesSwal,
    fireInvalidDateFormatSwal,
    fireInvalidSessionTypeSwal,
    fireInvalidNumberOfChildrenSwal,
  } = useUpdateDocumentSwals();

  const { confirmSwal } = useConfirmSwal();

  const confirmResult = () => {
    updateSessionSpacesDocsThunk(numberOfChildrenInBooking, date, sessionType);
  };

  const confirmUpdateSessionSpaces = () => {
    if (!date || !sessionType || !numberOfChildrenInBooking) {
      fireEmptyValuesSwal();
    } else if (isNotValidDateFormat(date)) {
      fireInvalidDateFormatSwal();
    } else if (isNotValidSessionType(sessionType)) {
      fireInvalidSessionTypeSwal();
    } else if (isNotValidNumberOfChildrenValue(numberOfChildrenInBooking)) {
      fireInvalidNumberOfChildrenSwal();
    } else {
      confirmSwal(confirmUpdateSessionSpacesMessage, "", imSureMessage, () =>
        confirmResult(date, sessionType, numberOfChildrenInBooking)
      );
    }
  };

  return { confirmUpdateSessionSpaces };
};

export default useConfirmUpdateSessionSpaces;
