import useHandleNewPriceChanges from "./hooks/use-handle-new-prices-changes";
import useConfirmUpdateMorningAndAfternoonShortSessionPrice from "./hooks/use-confirm-update-morning-and-afternoon-short-session-price";
import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import ReadExample from "../database-management/db-management-shared-components/read-example.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../styles/form/form.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";

const UpdateMorningAndAfternoonShortSessionPriceInput = () => {
  const { newMorningAndAfternoonShortSessionPrice } =
    useSessionPricesVariables();
  const { handleUpdateMorningAndAfternoonShortSessionPriceChange } =
    useHandleNewPriceChanges();
  const { confirmUpdateMorningAndAfternoonShortSessionPrice } =
    useConfirmUpdateMorningAndAfternoonShortSessionPrice();

  return (
    <Form>
      <Label>new morning and afternoon short session price:</Label>
      <LowercasedInput
        type="number"
        pattern="[0-9]*[.]?[0-9]+"
        inputMode="decimal" // Set input mode to decimal for number pad
        name="newMorningAndAfternoonShortSessionPrice"
        onChange={handleUpdateMorningAndAfternoonShortSessionPriceChange}
        value={newMorningAndAfternoonShortSessionPrice || ""}
        placeholder="ie 5.5 for £5.50"
      />

      {newMorningAndAfternoonShortSessionPrice ? (
        <>
          <YellowGreenButton
            type="button"
            onClick={confirmUpdateMorningAndAfternoonShortSessionPrice}
          >
            update price
          </YellowGreenButton>

          <WhiteShadowText>
            the new price will be £
            {newMorningAndAfternoonShortSessionPrice
              ? Number(newMorningAndAfternoonShortSessionPrice).toFixed(2)
              : null}
          </WhiteShadowText>
        </>
      ) : (
        <ReadExample />
      )}
    </Form>
  );
};

export default UpdateMorningAndAfternoonShortSessionPriceInput;
