import { useSelector } from "react-redux";

import useHandleAddWalletFundsChange from "./use-handle-wallet-funds-change";

import { selectWalletFundsToAdd } from "../../store/wallet-funds-to-add/wallet-funds-to-add.selector";

import CardInput from "./card-input/card-input.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Form, StyledInput } from "../../styles/form/form.styles";
import AddFundsHelp from "./add-funds-help.component";

const AddFunds = () => {
  const { handleAddWalletFundsChange } = useHandleAddWalletFundsChange();

  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  return (
    <>
      <ParentDiv>
        <BlueH2>add funds:</BlueH2>
        <AddFundsHelp />

        <Form className="add-funds">
          <StyledInput
            type="number"
            name="walletFunds"
            value={walletFundsToAdd || ""}
            min={1}
            placeholder="ie 10.50 for £10.50"
            onChange={handleAddWalletFundsChange}
            required
          />
        </Form>
      </ParentDiv>

      <CardInput />
    </>
  );
};

export default AddFunds;
