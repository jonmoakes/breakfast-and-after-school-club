import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

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
      <YellowGreenButton onClick={navigateToBookSession}>
        book a session
      </YellowGreenButton>

      <YellowGreenButton onClick={navigateToAddFunds}>
        add funds
      </YellowGreenButton>

      <YellowGreenButton onClick={navigateToUpdateEmail}>
        update email address
      </YellowGreenButton>

      <YellowGreenButton onClick={navigateToUpdatePassword}>
        update password
      </YellowGreenButton>

      <YellowGreenButton onClick={navigateToCloseAccount}>
        close account
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default AccountButtonLinks;
