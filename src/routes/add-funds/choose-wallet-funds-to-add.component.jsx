import { useSelector } from "react-redux";

import useHandleWalletFundsChange from "./add-funds-hooks/use-handle-wallet-funds-change";

import { selectWalletFundsToAdd } from "../../store/wallet-funds-to-add/wallet-funds-to-add.selector";

import { Form, StyledInput } from "../../styles/form/form.styles";

import { addFundsPlaceholder } from "../../strings/strings";

const ChooseWalletFundsToAdd = () => {
  const { handleWalletFundsChange } = useHandleWalletFundsChange();

  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  return (
    <Form className="add-funds">
      <StyledInput
        type="number"
        pattern="\d*"
        name="walletFunds"
        value={walletFundsToAdd || ""}
        min={1}
        placeholder={addFundsPlaceholder}
        onChange={handleWalletFundsChange}
        required
      />
    </Form>
  );
};

export default ChooseWalletFundsToAdd;
