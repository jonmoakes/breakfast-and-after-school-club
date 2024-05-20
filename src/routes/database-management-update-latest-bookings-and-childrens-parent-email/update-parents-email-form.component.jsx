import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useConfirmUpdateParentsEmail from "./hooks/use-confirm-update-parents-email";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";

import { ParentDiv } from "../../styles/div/div.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";

const UpdateParentsEmailForm = () => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { parentsUserId, parentEmail } = useGetDatabaseManagementSelectors();
  const { confirmUpdateParentsEmail } = useConfirmUpdateParentsEmail();

  return (
    <ParentDiv>
      <Form>
        <Label>parents user id:</Label>
        <StyledInput
          type="text"
          name="parentsUserId"
          value={parentsUserId || ""}
          onChange={handleDataToUpdateDocumentChange}
          placeholder="20 characters, lowercased"
        />

        <Label>new email:</Label>
        <StyledInput
          type="email"
          name="parentEmail"
          value={parentEmail || ""}
          onChange={handleDataToUpdateDocumentChange}
          placeholder="the new email address"
        />

        {parentsUserId && parentEmail ? (
          <YellowGreenButton
            type="button"
            onClick={() =>
              confirmUpdateParentsEmail(parentsUserId, parentEmail)
            }
          >
            update document
          </YellowGreenButton>
        ) : (
          <WhiteShadowText>please complete both inputs</WhiteShadowText>
        )}
      </Form>
    </ParentDiv>
  );
};

export default UpdateParentsEmailForm;
