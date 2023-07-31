import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const AccountButtonLinks = () => {
  const {
    navigateToBookSession,
    navigateToAddFunds,
    navigateToUpdateEmail,
    navigateToUpdatePassword,
    navigateToCloseAccount,
  } = useNavigateToRoute();

  return (
    <ParentDiv>
      <BlueH2>what would you like to do?</BlueH2>

      <BlackHr />
      <YellowGreenButton onClick={navigateToBookSession}>
        book a session
      </YellowGreenButton>

      <BlackHr />
      <YellowGreenButton onClick={navigateToAddFunds}>
        add funds
      </YellowGreenButton>

      <BlackHr />
      <YellowGreenButton onClick={navigateToUpdateEmail}>
        update email
      </YellowGreenButton>

      <BlackHr />
      <YellowGreenButton onClick={navigateToUpdatePassword}>
        update password
      </YellowGreenButton>

      <BlackHr />
      <YellowGreenButton onClick={navigateToCloseAccount}>
        close account
      </YellowGreenButton>

      <BlackHr />
    </ParentDiv>
  );
};

export default AccountButtonLinks;
