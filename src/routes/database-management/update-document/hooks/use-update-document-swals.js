import useFireSwal from "../../../../hooks/use-fire-swal";
import {
  documentLengthErrorMessage,
  emptyFieldsMessage,
  refundPriceLengthErrorMessage,
  whiteSpaceErrorMessage,
} from "../../../../strings/errors/errors-strings";

const useUpdateDocumentSwals = () => {
  const { fireSwal } = useFireSwal();

  const fireEmptyValuesSwal = () => {
    fireSwal("error", emptyFieldsMessage, "", 0, true, false);
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

  return {
    fireEmptyValuesSwal,
    fireDocumentIdLengthErrorSwal,
    fireRefundPriceLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
  };
};

export default useUpdateDocumentSwals;
