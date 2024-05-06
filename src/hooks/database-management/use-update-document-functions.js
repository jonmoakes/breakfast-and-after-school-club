const useUpdateDocumentFunctions = () => {
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

  const stringHasUpperCaseLetters = (stringValue) => {
    if (/[A-Z]/.test(stringValue)) {
      return true;
    } else {
      return false;
    }
  };

  const invalidPhoneNumberLength = (number) => {
    if (number.length !== 11) {
      return true;
    } else {
      return false;
    }
  };

  const invalidDocumentIdLength = (id) => {
    if (id.length !== 20) {
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

  const invalidUpdateBalanceLength = (number) => {
    if (number.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  const isNotValidNumberOfChildrenValue = (numberOfChildrenInBooking) => {
    if (
      numberOfChildrenInBooking === "0" ||
      numberOfChildrenInBooking.includes("-")
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
    invalidUpdateBalanceLength,
    invalidPhoneNumberLength,
    isNotValidDateFormat,
    isNotValidSessionType,
    isNotValidNumberOfChildrenValue,
  };
};

export default useUpdateDocumentFunctions;
