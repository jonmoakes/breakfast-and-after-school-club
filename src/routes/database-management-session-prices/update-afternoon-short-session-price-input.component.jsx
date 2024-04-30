import useHandleNewPriceChanges from "./hooks/use-handle-new-prices-changes";
import useConfirmUpdateAfternoonShortSessionPrice from "./hooks/use-confirm-update-afternoon-short-session-price";
import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import ReadExample from "../../components/database-management/read-example.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../styles/form/form.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";

const UpdateAfternoonShortSessionPriceInput = () => {
  const { newAfternoonShortSessionPrice } = useSessionPricesVariables();
  const { handleUpdateAfternoonShortSessionPriceChange } =
    useHandleNewPriceChanges();
  const { confirmUpdateAfternoonShortSessionPrice } =
    useConfirmUpdateAfternoonShortSessionPrice();

  return (
    <Form>
      <Label>new afternoon short session price:</Label>
      <LowercasedInput
        type="number"
        pattern="[0-9]*[.]?[0-9]+"
        inputMode="decimal" // Set input mode to decimal for number pad
        name="newAfternoonShortSessionPrice"
        onChange={handleUpdateAfternoonShortSessionPriceChange}
        value={newAfternoonShortSessionPrice || ""}
        placeholder="ie 5.5 for £5.50"
      />

      {newAfternoonShortSessionPrice ? (
        <>
          <YellowGreenButton
            type="button"
            onClick={confirmUpdateAfternoonShortSessionPrice}
          >
            update price
          </YellowGreenButton>

          <WhiteShadowText>
            the new price will be £
            {newAfternoonShortSessionPrice
              ? Number(newAfternoonShortSessionPrice).toFixed(2)
              : null}
          </WhiteShadowText>
        </>
      ) : (
        <ReadExample />
      )}
    </Form>
  );
};

export default UpdateAfternoonShortSessionPriceInput;
