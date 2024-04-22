import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const AccountButtonLinks = () => {
  const { appOwnerButtons, notAppOwnerButtons } = useNavigateToRoute();

  const { id, appOwnerId } = useGetCurrentUserSelectors();

  return (
    <ParentDiv>
      <BlueH2>what would you like to do?</BlueH2>

      {id === appOwnerId ? (
        <RenderButtonsList {...{ buttons: appOwnerButtons }} />
      ) : (
        <RenderButtonsList {...{ buttons: notAppOwnerButtons }} />
      )}
    </ParentDiv>
  );
};

export default AccountButtonLinks;
