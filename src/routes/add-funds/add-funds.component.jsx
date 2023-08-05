import { useSelector } from "react-redux";

import { selectPaymentIsProcessing } from "../../store/card-input-result/card-input-result.selector";

import Loader from "../../components/loader/loader.component";
import WalletBalance from "../../components/wallet-balance/wallet-balance.component";
import AddFundsHelp from "./add-funds-help.component";
import ChooseWalletFundsToAdd from "./choose-wallet-funds-to-add.component";
import CardInput from "./card-input.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import { BlackTitle } from "../../styles/h1/h1.styles";

const AddFunds = () => {
  const paymentIsProcessing = useSelector(selectPaymentIsProcessing);

  return (
    <Container>
      {paymentIsProcessing ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>add funds</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <WalletBalance />
        <AddFundsHelp />
        <ChooseWalletFundsToAdd />
      </ParentDiv>

      <CardInput />
    </Container>
  );
};

export default AddFunds;
