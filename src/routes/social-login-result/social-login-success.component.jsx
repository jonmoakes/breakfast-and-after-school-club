import { useSelector } from "react-redux";

import { selectError } from "../../store/user/user.selector";

import TroubleShooting from "../../components/social-logins/sections/troubleshooting.component";
import Safari from "../../components/social-logins/sections/safari.component";
import Brave from "../../components/social-logins/sections/brave.component";

import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const SocialLoginSuccess = () => {
  const error = useSelector(selectError);

  return (
    <>
      {!error ? (
        <>
          <BlackTitle>please wait...</BlackTitle>
          <BlueH2>signing you in...</BlueH2>

          <Text>
            if you haven't been redirected within 30 seconds, please try
            reloading the page by tapping the button below.
          </Text>

          <YellowGreenButton onClick={() => window.location.reload()}>
            reload page
          </YellowGreenButton>

          <TroubleShooting />
          <Safari />
          <Brave />
        </>
      ) : null}
    </>
  );
};

export default SocialLoginSuccess;
