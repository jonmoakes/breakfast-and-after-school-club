import useHandleNewPriceChanges from "./hooks/use-handle-new-prices-changes";
import useConfirmUpdateMorningAndAfternoonLongSessionPrice from "./hooks/use-confirm-update-morning-and-afternoon-long-session-price";
import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import ReadExample from "../database-management/db-management-shared-components/read-example.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../styles/form/form.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";

const UpdateMorningAndAfternoonLongSessionPriceInput = () => {
  const { newMorningAndAfternoonLongSessionPrice } =
    useSessionPricesVariables();
  const { handleUpdateMorningAndAfternoonLongSessionPriceChange } =
    useHandleNewPriceChanges();
  const { confirmUpdateMorningAndAfternoonLongSessionPrice } =
    useConfirmUpdateMorningAndAfternoonLongSessionPrice();

  return (
    <Form>
      <Label>new morning and afternoon Long session price:</Label>
      <LowercasedInput
        onWheel={(e) => e.target.blur()}
        type="number"
        pattern="[0-9]*[.]?[0-9]+"
        inputMode="decimal" // Set input mode to decimal for number pad
        name="newMorningAndAfternoonLongSessionPrice"
        onChange={handleUpdateMorningAndAfternoonLongSessionPriceChange}
        value={newMorningAndAfternoonLongSessionPrice || ""}
        placeholder="ie 5.5 for £5.50"
      />

      {newMorningAndAfternoonLongSessionPrice ? (
        <>
          <YellowGreenButton
            type="button"
            onClick={confirmUpdateMorningAndAfternoonLongSessionPrice}
          >
            update price
          </YellowGreenButton>

          <WhiteShadowText>
            the new price will be £
            {newMorningAndAfternoonLongSessionPrice
              ? Number(newMorningAndAfternoonLongSessionPrice).toFixed(2)
              : null}
          </WhiteShadowText>
        </>
      ) : (
        <ReadExample />
      )}
    </Form>
  );
};

export default UpdateMorningAndAfternoonLongSessionPriceInput;
