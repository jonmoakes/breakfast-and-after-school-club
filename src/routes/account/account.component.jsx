import useCheckForAndClearFormDetails from "./use-check-for-and-clear-form-details";

import AccountInfo from "./account.info.component";
import AddFunds from "./add-funds.component";
import AccountStripeLogo from "./account-stripe-logo.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const Account = () => {
  useCheckForAndClearFormDetails();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>your account</BlackTitle>
      </ParentDiv>

      <AccountInfo />
      <AddFunds />
      <AccountStripeLogo />
    </Container>
  );
};

export default Account;
