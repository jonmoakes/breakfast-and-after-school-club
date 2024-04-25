import useUpdateDocumentVariables from "./use-update-document-variables";

const useUpdateDocumentFunctions = () => {
  const { documentId, refundPrice } = useUpdateDocumentVariables();

  const valueStartsOrEndsWithSpace = (string) => {
    if (string.startsWith(" ") || string.endsWith(" ")) {
      return true;
    } else {
      return false;
    }
  };

  const formHasEmptyValue = () => {
    if (!documentId || !refundPrice) {
      return true;
    } else {
      return false;
    }
  };

  const invalidDocumentIdLength = () => {
    if (documentId.length !== 20) {
      return true;
    } else {
      return false;
    }
  };

  const invalidRefundPriceLength = () => {
    if (refundPrice.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  const formHasWhiteSpaceValues = () => {
    if (
      valueStartsOrEndsWithSpace(documentId) ||
      valueStartsOrEndsWithSpace(refundPrice)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return {
    valueStartsOrEndsWithSpace,
    invalidDocumentIdLength,
    invalidRefundPriceLength,
    formHasEmptyValue,
    formHasWhiteSpaceValues,
  };
};

export default useUpdateDocumentFunctions;
