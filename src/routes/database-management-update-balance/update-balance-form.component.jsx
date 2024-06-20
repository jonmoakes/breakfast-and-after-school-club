import useConfirmUpdateUserBalance from "./hooks/use-confirm-update-user-balance";
import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";
import { YellowSpan } from "../../styles/span/span.styles";

const UpdateBalanceForm = ({ errorId }) => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { usersDocumentId, sessionPrice } = useGetDatabaseManagementSelectors();
  const { confirmUpdateUserBalance } = useConfirmUpdateUserBalance();

  return (
    <Form>
      <Label>{errorId ? "document Id:" : "parents user id:"}</Label>
      <StyledInput
        type="text"
        name="usersDocumentId"
        value={usersDocumentId || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="a 20 character value"
      />

      <Label>amount to add:</Label>
      <StyledInput
        onWheel={(e) => e.target.blur()}
        type="number"
        inputMode="numeric"
        name="sessionPrice"
        value={sessionPrice || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="in pence"
      />

      {sessionPrice ? (
        <WhiteShadowText>
          you will be adding{" "}
          <YellowSpan>£{(sessionPrice / 100).toFixed(2)}</YellowSpan> to the
          users balance.
        </WhiteShadowText>
      ) : null}
      <YellowGreenButton type="button" onClick={confirmUpdateUserBalance}>
        update balance
      </YellowGreenButton>
    </Form>
  );
};

export default UpdateBalanceForm;
