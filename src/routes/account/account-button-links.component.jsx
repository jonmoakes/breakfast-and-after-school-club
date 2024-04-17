import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import RenderButtons from "./render-buttons.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const AccountButtonLinks = () => {
  const { appOwnerButtons, notAppOwnerButtons } = useNavigateToRoute();

  const { id, appOwnerId } = useGetCurrentUserSelectors();

  return (
    <ParentDiv>
      <BlueH2>what would you like to do?</BlueH2>

      {id === appOwnerId ? (
        <RenderButtons {...{ buttons: appOwnerButtons }} />
      ) : (
        <RenderButtons {...{ buttons: notAppOwnerButtons }} />
      )}
    </ParentDiv>
  );
};

export default AccountButtonLinks;
