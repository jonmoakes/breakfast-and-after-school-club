import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";

const useUpdateDocumentVariables = () => {
  const { dataToUpdateDocument } = useGetDatabaseManagementSelectors();

  const {
    documentId,
    refundPrice,
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
  } = dataToUpdateDocument ?? {};

  return {
    documentId,
    refundPrice,
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
  };
};

export default useUpdateDocumentVariables;
