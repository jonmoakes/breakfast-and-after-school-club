import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const AccountButtonLinks = () => {
  const { id, appOwnerId } = useGetCurrentUserSelectors();
  const { appOwnerButtons, notAppOwnerButtons, legalButtons } =
    useNavigateToRoute();

  return (
    <>
      {id === appOwnerId ? (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: appOwnerButtons }} />
        </ParentDiv>
      ) : (
        <ParentDiv>
          <BlueH2>what would you like to do?</BlueH2>
          <RenderButtonsList {...{ buttons: notAppOwnerButtons }} />
        </ParentDiv>
      )}

      <ParentDiv>
        <BlueH2>view our:</BlueH2>
        <RenderButtonsList {...{ buttons: legalButtons }} />
      </ParentDiv>
    </>
  );
};

export default AccountButtonLinks;
