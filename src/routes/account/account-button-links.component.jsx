import { useSelector } from "react-redux";
import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const AccountButtonLinks = () => {
  const { notAppOwnerButtons, appOwnerButtons } = useNavigateToRoute();

  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { appOwnerId } = currentUserEnvironmentVariables;

  return (
    <ParentDiv>
      <BlueH2>what would you like to do?</BlueH2>

      {currentUser.id === appOwnerId
        ? appOwnerButtons.map((button) => {
            const { id, text, onClick } = button;
            return (
              <div key={id}>
                <BlackHr />
                <YellowGreenButton onClick={onClick}>{text}</YellowGreenButton>
              </div>
            );
          })
        : notAppOwnerButtons.map((button) => {
            const { id, text, onClick } = button;
            return (
              <div key={id}>
                <BlackHr />
                <YellowGreenButton onClick={onClick}>{text}</YellowGreenButton>
              </div>
            );
          })}
    </ParentDiv>
  );
};

export default AccountButtonLinks;
