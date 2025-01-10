import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const AccountButtonLinks = () => {
  const { id, appOwnerId, appAdminId } = useGetCurrentUserSelectors();
  const { appAdminButtons, appOwnerButtons, notAppOwnerButtons } =
    useNavigateToRoute();

  return (
    <>
      {id === appAdminId ? (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: appAdminButtons }} />
        </ParentDiv>
      ) : id === appOwnerId ? (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: appOwnerButtons }} />
        </ParentDiv>
      ) : (
        <ParentDiv>
          <BlueH2>what would you like to do?</BlueH2>
          <RenderButtonsList {...{ buttons: notAppOwnerButtons }} />
        </ParentDiv>
      )}
    </>
  );
};

export default AccountButtonLinks;
