import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useIsRouteWithNavWarning from "../../hooks/use-is-route-with-nav-warning";
import useConfirmSwal from "../../hooks/use-confirm-swal";

import { selectCurrentUser } from "../../store/user/user.selector";

import Logo from "../../assets/logo.png";
import { LogoContainer } from "../../styles/div/div.styles";
import { LogoImage } from "../../styles/image/image.styles";

import {
  areYouSureMessage,
  imSureMessage,
  loseAllDataMessage,
} from "../../strings/strings";

const NavLogo = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { confirmForwardToNewRoute } = useConfirmSwal();

  const navigate = useNavigate();

  const handleClick = () => {
    const route = "/";

    if (currentUser && isRouteWithNavWarning()) {
      confirmForwardToNewRoute(
        areYouSureMessage,
        loseAllDataMessage,
        imSureMessage,
        route
      );
    } else {
      navigate(route);
    }
  };

  return (
    <LogoContainer>
      <LogoImage onClick={handleClick} src={Logo} alt="logo" />
    </LogoContainer>
  );
};

export default NavLogo;
