import useCheckForAndClearFormDetails from "./account-hooks/use-check-for-and-clear-form-details";

import Intro from "./intro.component";
import AccountButtonLinks from "./account-button-links.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import Footer from "../../components/footer/footer.component";

const Account = () => {
  useCheckForAndClearFormDetails();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>your account</BlackTitle>
      </ParentDiv>
      <Intro />
      <AccountButtonLinks />

      <Footer />
    </Container>
  );
};

export default Account;
