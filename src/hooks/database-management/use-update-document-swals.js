import useFireSwal from "../use-fire-swal";
import {
  documentLengthErrorMessage,
  emptyFieldsMessage,
  invalidDateErrorMessage,
  invalidNumberOfChildrenErrorMessage,
  invalidSessionTypeErrorMessage,
  phoneNumberLengthErrorMessage,
  refundPriceLengthErrorMessage,
  uppercaseLettersErrorMessage,
  whiteSpaceErrorMessage,
} from "../../strings/errors/errors-strings";

const useUpdateDocumentSwals = () => {
  const { fireSwal } = useFireSwal();

  const fireEmptyValuesSwal = () => {
    fireSwal("error", emptyFieldsMessage, "", 0, true, false);
  };

  const fireCantHaveUppercaseCharactersSwal = () => {
    fireSwal("error", uppercaseLettersErrorMessage, "", 0, true, false);
  };

  const fireDocumentIdLengthErrorSwal = () => {
    fireSwal("error", documentLengthErrorMessage, "", 0, true, false);
  };

  const fireRefundPriceLengthErrorSwal = () => {
    fireSwal("error", refundPriceLengthErrorMessage, "", 0, true, false);
  };

  const fireWhiteSpaceErrorSwal = () => {
    fireSwal("error", whiteSpaceErrorMessage, "", 0, true, false);
  };

  const fireInvalidDateFormatSwal = () => {
    fireSwal("error", invalidDateErrorMessage, "", 0, true, false);
  };

  const fireInvalidSessionTypeSwal = () => {
    fireSwal("error", invalidSessionTypeErrorMessage, "", 0, true, false);
  };

  const fireInvalidPhoneNumberSwal = () => {
    fireSwal("error", phoneNumberLengthErrorMessage, "", 0, true, false);
  };

  const fireInvalidNumberOfChildrenSwal = () => {
    fireSwal("error", invalidNumberOfChildrenErrorMessage, "", 0, true, false);
  };

  return {
    fireEmptyValuesSwal,
    fireCantHaveUppercaseCharactersSwal,
    fireDocumentIdLengthErrorSwal,
    fireRefundPriceLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
    fireInvalidDateFormatSwal,
    fireInvalidSessionTypeSwal,
    fireInvalidPhoneNumberSwal,
    fireInvalidNumberOfChildrenSwal,
  };
};

export default useUpdateDocumentSwals;
