import useHandleNewPriceChanges from "./hooks/use-handle-new-prices-changes";
import useConfirmUpdateMorningSessionPrice from "./hooks/use-confirm-update-morning-session-price";
import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import ReadExample from "../database-management/db-management-shared-components/read-example.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../styles/form/form.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";

const UpdateMorningSessionPriceInput = () => {
  const { newMorningSessionPrice } = useSessionPricesVariables();
  const { handleUpdateMorningSessionPriceChange } = useHandleNewPriceChanges();
  const { confirmUpdateMorningSessionPrice } =
    useConfirmUpdateMorningSessionPrice();
  return (
    <Form>
      <Label>new morning session price:</Label>
      <LowercasedInput
        onWheel={(e) => e.target.blur()}
        type="number"
        pattern="[0-9]*[.]?[0-9]+"
        inputMode="decimal" // Set input mode to decimal for number pad
        name="newMorningSessionPrice"
        onChange={handleUpdateMorningSessionPriceChange}
        value={newMorningSessionPrice || ""}
        placeholder="ie 5.5 for £5.50"
      />

      {newMorningSessionPrice ? (
        <>
          <YellowGreenButton
            type="button"
            onClick={confirmUpdateMorningSessionPrice}
          >
            update price
          </YellowGreenButton>

          <WhiteShadowText>
            the new price will be £
            {newMorningSessionPrice
              ? Number(newMorningSessionPrice).toFixed(2)
              : null}
          </WhiteShadowText>
        </>
      ) : (
        <ReadExample />
      )}
    </Form>
  );
};

export default UpdateMorningSessionPriceInput;
