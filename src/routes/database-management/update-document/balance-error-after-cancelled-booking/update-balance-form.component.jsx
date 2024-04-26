import useConfirmUpdateUserBalance from "./hooks/use-confirm-update-user-balance";
import useHandleDataToUpdateDocumentChange from "../hooks/use-handle-data-to-update-document-change";
import useUpdateDocumentVariables from "../hooks/use-update-document-variables";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../../../styles/form/form.styles";

const UpdateBalanceForm = () => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { documentId, refundPrice } = useUpdateDocumentVariables();
  const { confirmUpdateUserBalance } = useConfirmUpdateUserBalance();

  return (
    <Form>
      <Label>document Id:</Label>
      <StyledInput
        type="text"
        name="documentId"
        value={documentId || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="a 20 character value"
      />

      <Label>refund price:</Label>
      <StyledInput
        type="number"
        name="refundPrice"
        value={refundPrice || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="in pence"
      />

      <YellowGreenButton type="button" onClick={confirmUpdateUserBalance}>
        update document
      </YellowGreenButton>
    </Form>
  );
};

export default UpdateBalanceForm;
