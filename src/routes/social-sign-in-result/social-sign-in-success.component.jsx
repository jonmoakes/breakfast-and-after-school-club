import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const SocialSignInSuccess = () => {
  const { currentUserError } = useGetCurrentUserSelectors();

  return (
    <>
      {!currentUserError ? (
        <>
          <BlackTitle>please wait...</BlackTitle>
          <BlueH2>signing you in...</BlueH2>
        </>
      ) : null}
    </>
  );
};

export default SocialSignInSuccess;
