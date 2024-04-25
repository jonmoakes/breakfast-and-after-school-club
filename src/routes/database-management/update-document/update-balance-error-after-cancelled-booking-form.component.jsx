import useHandleDataToUpdateDocumentChange from "./hooks/use-handle-data-to-update-document-change";
import useUpdateDocumentVariables from "./hooks/use-update-document-variables";
import useConfirmUpdateUserBalance from "./hooks/use-confirm-update-user-balance.js";

import InputRecommendation from "./input-recommendation.component";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import {
  Form,
  Label,
  LowercasedInput,
  StyledInput,
} from "../../../styles/form/form.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlackSpan } from "../../../styles/span/span.styles";

const UpdateBalanceErrorAfterCancelledBookingForm = () => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { documentId, refundPrice } = useUpdateDocumentVariables();
  const { confirmUpdateUserBalance } = useConfirmUpdateUserBalance();

  return (
    <>
      <ul className="normal-text">
        <li>
          <BlackSpan>the</BlackSpan> document Id
        </li>
        <li>
          <BlackSpan>the</BlackSpan> refund Price
        </li>
      </ul>

      <InputRecommendation />

      <Text>
        if successful, the user should instantly see their balance updated to
        the correct amount.
      </Text>

      <Form>
        <Label>document Id:</Label>
        <LowercasedInput
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
    </>
  );
};

export default UpdateBalanceErrorAfterCancelledBookingForm;
