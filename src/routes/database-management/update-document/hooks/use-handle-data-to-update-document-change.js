import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";

const useHandleDataToUpdateDocumentChange = () => {
  const { dataToUpdateDocument } = useGetDatabaseManagementSelectors();
  const { dispatchSetDataToUpdateDocument } = useDatabaseManagementActions();

  const handleDataToUpdateDocumentChange = (event) => {
    const { name, value } = event.target;
    dispatchSetDataToUpdateDocument({ ...dataToUpdateDocument, [name]: value });
  };

  return { handleDataToUpdateDocumentChange };
};

export default useHandleDataToUpdateDocumentChange;
