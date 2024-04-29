import useHandleDataToUpdateDocumentChange from "../hooks/use-handle-data-to-update-document-change";
import useUpdateDocumentVariables from "../hooks/use-update-document-variables";
import useConfirmUpdateSessionSpacesAndUserWalletBalance from "./hooks/use-confirm-update-session-spaces-and-user-wallet-balance";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../../../styles/form/form.styles";

const UpdateSessionSpacesForm = () => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const {
    date,
    sessionType,
    numberOfChildrenInBooking,
    usersDocumentId,
    refundPrice,
  } = useUpdateDocumentVariables();
  const { confirmUpdateSessionSpacesAndUserWalletBalance } =
    useConfirmUpdateSessionSpacesAndUserWalletBalance();

  return (
    <Form>
      <Label>date:</Label>
      <StyledInput
        type="text"
        name="date"
        value={date || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="YYYY-MM-DD format"
      />

      <Label>sessionType:</Label>
      <StyledInput
        type="text"
        name="sessionType"
        value={sessionType || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="formatted in camel case"
      />

      <Label>number of children in the booking:</Label>
      <StyledInput
        type="number"
        name="numberOfChildrenInBooking"
        value={numberOfChildrenInBooking || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="number value"
      />

      <Label>users document Id:</Label>
      <StyledInput
        type="text"
        name="usersDocumentId"
        value={usersDocumentId || ""}
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

      <YellowGreenButton
        type="button"
        onClick={confirmUpdateSessionSpacesAndUserWalletBalance}
      >
        update document
      </YellowGreenButton>
    </Form>
  );
};

export default UpdateSessionSpacesForm;
