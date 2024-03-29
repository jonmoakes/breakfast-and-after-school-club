import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import RenderButtons from "./render-buttons.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const AccountButtonLinks = () => {
  const {
    appOwnerButtons,
    notAppOwnerEmailProviderButtons,
    notAppOwnerAuthProviderButtons,
  } = useNavigateToRoute();

  const { id, currentUserProvider, appOwnerId } = useGetCurrentUserSelectors();

  return (
    <ParentDiv>
      <BlueH2>what would you like to do?</BlueH2>

      {id === appOwnerId ? (
        <RenderButtons {...{ buttons: appOwnerButtons }} />
      ) : id !== appOwnerId && currentUserProvider === "email" ? (
        <RenderButtons {...{ buttons: notAppOwnerEmailProviderButtons }} />
      ) : (
        <RenderButtons {...{ buttons: notAppOwnerAuthProviderButtons }} />
      )}
    </ParentDiv>
  );
};

export default AccountButtonLinks;
