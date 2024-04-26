import useUpdateDocumentVariables from "./use-update-document-variables";

const useUpdateDocumentFunctions = () => {
  const { documentId, refundPrice } = useUpdateDocumentVariables();

  const stringHasUpperCaseLetters = (string) => {
    if (/[A-Z]/.test(string)) {
      return true;
    } else {
      return false;
    }
  };

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

  const parentNameOrChildrenInBookingIsEmpty = (
    parentName,
    childrenInBooking
  ) => {
    if (!parentName.length || !childrenInBooking.length) {
      return true;
    } else {
      return false;
    }
  };

  const invalidDocumentIdLength = (string) => {
    if (string.length !== 20) {
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

  const formHasWhiteSpaceValues = (string) => {
    if (
      valueStartsOrEndsWithSpace(string) ||
      valueStartsOrEndsWithSpace(refundPrice)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isNotValidDateFormat = (dateString) => {
    // Regular expression to match yyyy-mm-dd format
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return !regex.test(dateString);
  };

  const isNotValidSessionType = (sessionTypeString) => {
    if (
      sessionTypeString !== "morning" &&
      sessionTypeString !== "afternoonShort" &&
      sessionTypeString !== "afternoonLong" &&
      sessionTypeString !== "morningAndAfternoonShort" &&
      sessionTypeString !== "morningAndAfternoonLong"
    ) {
      return true;
    } else {
      return false;
    }
  };

  return {
    stringHasUpperCaseLetters,
    valueStartsOrEndsWithSpace,
    invalidDocumentIdLength,
    invalidRefundPriceLength,
    formHasEmptyValue,
    parentNameOrChildrenInBookingIsEmpty,
    formHasWhiteSpaceValues,
    isNotValidDateFormat,
    isNotValidSessionType,
  };
};

export default useUpdateDocumentFunctions;
