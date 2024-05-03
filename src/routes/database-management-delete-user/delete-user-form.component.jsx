import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useConfirmDeleteUser from "./hooks/use-confirm-delete-user";

import { ParentDiv } from "../../styles/div/div.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const DeleteUserForm = () => {
  const { userToDeleteDocumentId } = useGetDatabaseManagementSelectors();
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { confirmDeleteUser } = useConfirmDeleteUser();

  return (
    <ParentDiv>
      <Form>
        <Label>child to delete id</Label>
        <StyledInput
          type="text"
          name="userToDeleteDocumentId"
          onChange={handleDataToUpdateDocumentChange}
          value={userToDeleteDocumentId || ""}
          placeholder="20 characters, lowercased"
        />

        {userToDeleteDocumentId ? (
          <YellowGreenButton type="button" onClick={confirmDeleteUser}>
            delete user document
          </YellowGreenButton>
        ) : null}
      </Form>
    </ParentDiv>
  );
};

export default DeleteUserForm;
