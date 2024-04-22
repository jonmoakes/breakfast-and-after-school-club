import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

const AccountButtonLinks = () => {
  const { appOwnerButtons, notAppOwnerButtons } = useNavigateToRoute();
  const { id, appOwnerId } = useGetCurrentUserSelectors();

  return (
    <>
      {id === appOwnerId ? (
        <RenderButtonsList {...{ buttons: appOwnerButtons }} />
      ) : (
        <RenderButtonsList {...{ buttons: notAppOwnerButtons }} />
      )}
    </>
  );
};

export default AccountButtonLinks;
