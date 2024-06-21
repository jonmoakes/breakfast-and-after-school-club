import useCheckForAndClearFormDetails from "./account-hooks/use-check-for-and-clear-form-details";
import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import Intro from "./intro.component";
import AccountButtonLinks from "./account-button-links.component";
import Footer from "../../components/footer/footer.component";

import Logo from "../../assets/logo-80x80.webp";

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
        <LogoImage
          src={schoolLogoUrl && schoolLogoUrl !== "none" ? schoolLogoUrl : Logo}
          alt="logo"
        />
      </ParentDiv>
      <Intro />
      <AccountButtonLinks />

      <Footer />
    </Container>
  );
};

export default Account;
