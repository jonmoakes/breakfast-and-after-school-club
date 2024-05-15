import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";
import { ParentDiv } from "../../styles/div/div.styles";

const AccountButtonLinks = () => {
  const { appOwnerButtons, notAppOwnerButtons } = useNavigateToRoute();
  const { id, appOwnerId } = useGetCurrentUserSelectors();

  return (
    <>
      {id === appOwnerId ? (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: appOwnerButtons }} />
        </ParentDiv>
      ) : (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: notAppOwnerButtons }} />
        </ParentDiv>
      )}
    </>
  );
};

export default AccountButtonLinks;
