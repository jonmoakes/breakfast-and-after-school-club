import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useClearCardInputOnZeroWalletFunds from "./add-funds-hooks/use-clear-card-input-on-zero-wallet-funds";
import useHandleWalletFundsChange from "./add-funds-hooks/use-handle-wallet-funds-change";

import { Form, StyledInput } from "../../styles/form/form.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { addFundsPlaceholder } from "../../strings/placeholders/placeholders-strings";

const ChooseWalletFundsToAdd = () => {
  useClearCardInputOnZeroWalletFunds();
  const { walletFundsToAdd } = useGetCurrentUserSelectors();
  const { handleWalletFundsChange } = useHandleWalletFundsChange();

  return (
    <>
      <BlackHr />
      <Text>how much would you like to add to your wallet?</Text>
      <Form className="add-funds">
        <StyledInput
          onWheel={(e) => e.target.blur()}
          type="number"
          pattern="[0-9]*[.]?[0-9]+"
          inputMode="decimal" // Set input mode to decimal for number pad
          name="walletFunds"
          value={walletFundsToAdd || ""}
          min={0.5}
          max={200}
          placeholder={addFundsPlaceholder}
          onChange={handleWalletFundsChange}
          required
        />
      </Form>
    </>
  );
};

export default ChooseWalletFundsToAdd;
