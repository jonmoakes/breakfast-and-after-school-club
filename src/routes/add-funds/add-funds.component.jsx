import { useSelector } from "react-redux";

import useHandleWalletFundsChange from "./add-funds-hooks/use-handle-wallet-funds-change";

import { selectWalletFundsToAdd } from "../../store/wallet-funds-to-add/wallet-funds-to-add.selector";

import WalletBalance from "../../components/wallet-balance/wallet-balance.component";
import AddFundsHelp from "./add-funds-help.component";
import CardInput from "./card-input.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, StyledInput } from "../../styles/form/form.styles";

import { addFundsPlaceholder } from "../../strings/strings";
import { BlackTitle } from "../../styles/h1/h1.styles";

const AddFunds = () => {
  const { handleWalletFundsChange } = useHandleWalletFundsChange();

  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>add funds</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <WalletBalance />
        <AddFundsHelp />

        <Form className="add-funds">
          <StyledInput
            type="number"
            name="walletFunds"
            value={walletFundsToAdd || ""}
            min={1}
            placeholder={addFundsPlaceholder}
            onChange={handleWalletFundsChange}
            required
          />
        </Form>
      </ParentDiv>

      <CardInput />
    </Container>
  );
};

export default AddFunds;
