import useHandleNewPriceChanges from "./hooks/use-handle-new-prices-changes";
import useConfirmUpdateAfternoonLongSessionPrice from "./hooks/use-confirm-update-afternoon-long-session-price";
import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import ReadExample from "../read-example.component";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../../styles/form/form.styles";
import { WhiteShadowText } from "../../../styles/p/p.styles";

const UpdateAfternoonLongSessionPriceInput = () => {
  const { newAfternoonLongSessionPrice } = useSessionPricesVariables();
  const { handleUpdateAfternoonLongSessionPriceChange } =
    useHandleNewPriceChanges();
  const { confirmUpdateAfternoonLongSessionPrice } =
    useConfirmUpdateAfternoonLongSessionPrice();

  return (
    <Form>
      <Label>new afternoon Long session price:</Label>
      <LowercasedInput
        type="number"
        pattern="[0-9]*[.]?[0-9]+"
        inputMode="decimal" // Set input mode to decimal for number pad
        name="newAfternoonLongSessionPrice"
        onChange={handleUpdateAfternoonLongSessionPriceChange}
        value={newAfternoonLongSessionPrice || ""}
        placeholder="ie 5.5 for £5.50"
      />

      {newAfternoonLongSessionPrice ? (
        <>
          <YellowGreenButton
            type="button"
            onClick={confirmUpdateAfternoonLongSessionPrice}
          >
            update price
          </YellowGreenButton>

          <WhiteShadowText>
            the new price will be £
            {newAfternoonLongSessionPrice
              ? Number(newAfternoonLongSessionPrice).toFixed(2)
              : null}
          </WhiteShadowText>
        </>
      ) : (
        <ReadExample />
      )}
    </Form>
  );
};

export default UpdateAfternoonLongSessionPriceInput;
