import useConfirmAddFundsAfterGettingClientSecret from "./add-funds-hooks/use-confirm-add-funds-after-getting-client-secret";

import RedirectAndLoader from "./errors-help-redirect/redirect-and-loader.component";
import WalletBalance from "../../components/wallet-balance/wallet-balance.component";
import AddFundsHelp from "./errors-help-redirect/add-funds-help.component";
import ChooseWalletFundsToAdd from "./choose-wallet-funds-to-add.component";
import CardInput from "./card-input.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const AddFunds = () => {
  //once confimed and succsessful, a paymentObject will be available and will redirect to payment result route.
  // Success or filure of payment is handled in payment result route.
  useConfirmAddFundsAfterGettingClientSecret();

  return (
    <Container>
      <RedirectAndLoader />

      <ParentDiv>
        <BlackTitle>add funds</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <WalletBalance />
        <AddFundsHelp />
        <ChooseWalletFundsToAdd />
      </ParentDiv>

      <CardInput />
      <ShowFetchErrors />
    </Container>
  );
};

export default AddFunds;
