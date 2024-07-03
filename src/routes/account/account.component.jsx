import useCheckForAndClearFormDetails from "./account-hooks/use-check-for-and-clear-form-details";
import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import Intro from "./intro.component";
import AccountButtonLinks from "./account-button-links.component";
import Footer from "../../components/footer/footer.component";

import { Container } from "../../styles/container/container.styles";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { LogoImage } from "../../styles/image/image.styles";

const Account = () => {
  const { schoolLogoUrl } = useGetCurrentUserSelectors();
  useCheckForAndClearFormDetails();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>your account</BlackTitle>
        {schoolLogoUrl && schoolLogoUrl !== "none" ? (
          <LogoImage className="account" src={schoolLogoUrl} alt="logo" />
        ) : null}
      </ParentDiv>
      <Intro />
      <AccountButtonLinks />

      <Footer />
    </Container>
  );
};

export default Account;
