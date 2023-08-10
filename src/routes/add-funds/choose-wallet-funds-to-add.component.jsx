import { useSelector } from "react-redux";

import useClearCardInputOnZeroWalletFunds from "./add-funds-hooks/use-clear-card-input-on-zero-wallet-funds";
import useHandleWalletFundsChange from "./add-funds-hooks/use-handle-wallet-funds-change";

import { selectWalletFundsToAdd } from "../../store/wallet-funds-to-add/wallet-funds-to-add.selector";

import { Form, StyledInput } from "../../styles/form/form.styles";

import { addFundsPlaceholder } from "../../strings/strings";

const ChooseWalletFundsToAdd = () => {
  useClearCardInputOnZeroWalletFunds();
  const { handleWalletFundsChange } = useHandleWalletFundsChange();

  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  return (
    <Form className="add-funds">
      <StyledInput
        type="number"
        pattern="[0-9]*"
        name="walletFunds"
        value={walletFundsToAdd || ""}
        min={1}
        max={100}
        placeholder={addFundsPlaceholder}
        onChange={handleWalletFundsChange}
        required
      />
    </Form>
  );
};

export default ChooseWalletFundsToAdd;
