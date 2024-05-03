import useGetDatabaseManagementSelectors from "../get-selectors/use-get-database-management-selectors";

const useUpdateDocumentFunctions = () => {
  const { usersDocumentId, refundPrice, numberOfChildrenInBooking } =
    useGetDatabaseManagementSelectors();

  const stringHasUpperCaseLetters = (stringValue) => {
    if (/[A-Z]/.test(stringValue)) {
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
    if (!usersDocumentId || !refundPrice) {
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

  const invalidDocumentIdLength = (id) => {
    if (id.length !== 20) {
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

  const isNotValidNumberOfChildrenValue = () => {
    if (
      numberOfChildrenInBooking === undefined ||
      !numberOfChildrenInBooking.length ||
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
    invalidRefundPriceLength,
    formHasEmptyValue,
    parentNameOrChildrenInBookingIsEmpty,

    isNotValidDateFormat,
    isNotValidSessionType,
    isNotValidNumberOfChildrenValue,
  };
};

export default useUpdateDocumentFunctions;
