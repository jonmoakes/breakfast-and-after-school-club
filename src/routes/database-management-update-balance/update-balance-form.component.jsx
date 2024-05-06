import useConfirmUpdateUserBalance from "./hooks/use-confirm-update-user-balance";
import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";

const UpdateBalanceForm = () => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { usersDocumentId, refundPrice } = useGetDatabaseManagementSelectors();
  const { confirmUpdateUserBalance } = useConfirmUpdateUserBalance();

  return (
    <Form>
      <Label>document Id:</Label>
      <StyledInput
        type="text"
        name="usersDocumentId"
        value={usersDocumentId || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="a 20 character value"
      />

      <Label>amount to add:</Label>
      <StyledInput
        type="number"
        name="refundPrice"
        value={refundPrice || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="in pence"
      />

      <YellowGreenButton type="button" onClick={confirmUpdateUserBalance}>
        update balance
      </YellowGreenButton>
    </Form>
  );
};

export default UpdateBalanceForm;
