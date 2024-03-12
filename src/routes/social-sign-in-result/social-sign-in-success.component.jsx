import { useSelector } from "react-redux";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const SocialSignInSuccess = () => {
  const { currentUserError } = useSelector(selectCurrentUserSelectors);

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
