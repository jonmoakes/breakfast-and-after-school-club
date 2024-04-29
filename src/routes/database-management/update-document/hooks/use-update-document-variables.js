import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";

const useUpdateDocumentVariables = () => {
  const { dataToUpdateDocument } = useGetDatabaseManagementSelectors();

  const {
    refundPrice,
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
    numberOfChildrenInBooking,
    usersDocumentId,
  } = dataToUpdateDocument ?? {};

  return {
    refundPrice,
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
    numberOfChildrenInBooking,
    usersDocumentId,
  };
};

export default useUpdateDocumentVariables;
