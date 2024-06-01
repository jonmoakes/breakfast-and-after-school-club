import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import {
  Form,
  Label,
  LowercasedInput,
  StyledInput,
} from "../../styles/form/form.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";
import useConfirmCreateUser from "./hooks/use-confirm-create-user";

const CreateUserForm = () => {
  const { parentName, parentEmail, parentPhoneNumber } =
    useGetDatabaseManagementSelectors();
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { confirmCreateUser } = useConfirmCreateUser();

  return (
    <ParentDiv>
      <Form>
        <Label>customer name:</Label>
        <StyledInput
          type="text"
          name="parentName"
          onChange={handleDataToUpdateDocumentChange}
          value={parentName || ""}
        />

        <Label>customer email:</Label>
        <LowercasedInput
          type="email"
          name="parentEmail"
          onChange={handleDataToUpdateDocumentChange}
          value={parentEmail || ""}
        />

        <Label>customer phone number:</Label>
        <StyledInput
          type="number"
          inputmode="numeric"
          name="parentPhoneNumber"
          onChange={handleDataToUpdateDocumentChange}
          value={parentPhoneNumber || ""}
        />

        {parentName && parentEmail && parentPhoneNumber ? (
          <YellowGreenButton
            type="button"
            onClick={() =>
              confirmCreateUser(parentName, parentEmail, parentPhoneNumber)
            }
          >
            create user
          </YellowGreenButton>
        ) : (
          <WhiteShadowText>
            please fill in all fields in the form above.
          </WhiteShadowText>
        )}
      </Form>
    </ParentDiv>
  );
};

export default CreateUserForm;
