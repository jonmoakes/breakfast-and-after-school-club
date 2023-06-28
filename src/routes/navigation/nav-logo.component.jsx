import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import Logo from "../../assets/logo.png";

import { LogoContainer } from "../../styles/div/div.styles";
import { LogoImage } from "../../styles/image/image.styles";

const NavLogo = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <LogoContainer>
      <LogoImage
        onClick={() => hamburgerHandlerNavigate("/")}
        src={Logo}
        alt="logo"
      />
    </LogoContainer>
  );
};

export default NavLogo;
