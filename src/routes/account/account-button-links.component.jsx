import { useSelector } from "react-redux";

import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import RenderButtons from "./render-buttons.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const AccountButtonLinks = () => {
  const {
    appOwnerButtons,
    notAppOwnerEmailProviderButtons,
    notAppOwnerAuthProviderButtons,
  } = useNavigateToRoute();

  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { appOwnerId } = currentUserEnvironmentVariables;
  const { id, provider } = currentUser;

  return (
    <ParentDiv>
      <BlueH2>what would you like to do?</BlueH2>

      {id === appOwnerId ? (
        <RenderButtons {...{ buttons: appOwnerButtons }} />
      ) : id !== appOwnerId && provider === "email" ? (
        <RenderButtons {...{ buttons: notAppOwnerEmailProviderButtons }} />
      ) : (
        <RenderButtons {...{ buttons: notAppOwnerAuthProviderButtons }} />
      )}
    </ParentDiv>
  );
};

export default AccountButtonLinks;
