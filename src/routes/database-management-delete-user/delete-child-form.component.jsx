import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useConfirmDeleteChild from "./hooks/use-confirm-delete-child";

import { ParentDiv } from "../../styles/div/div.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const DeleteChildForm = () => {
  const { childToDeleteDocumentId } = useGetDatabaseManagementSelectors();
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { confirmDeleteChild } = useConfirmDeleteChild();

  return (
    <ParentDiv>
      <Form>
        <Label>child to delete id</Label>
        <StyledInput
          type="text"
          name="childToDeleteDocumentId"
          onChange={handleDataToUpdateDocumentChange}
          value={childToDeleteDocumentId || ""}
          placeholder="20 characters, lowercased"
        />

        {childToDeleteDocumentId ? (
          <YellowGreenButton type="button" onClick={confirmDeleteChild}>
            delete child document
          </YellowGreenButton>
        ) : null}
      </Form>
    </ParentDiv>
  );
};

export default DeleteChildForm;
