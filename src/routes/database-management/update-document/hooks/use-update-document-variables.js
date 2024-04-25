import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";

const useUpdateDocumentVariables = () => {
  const { dataToUpdateDocument } = useGetDatabaseManagementSelectors();

  const { documentId, refundPrice } = dataToUpdateDocument ?? {};

  return { documentId, refundPrice };
};

export default useUpdateDocumentVariables;
