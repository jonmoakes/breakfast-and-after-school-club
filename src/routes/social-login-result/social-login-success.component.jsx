import { useSelector } from "react-redux";

import { selectError } from "../../store/user/user.selector";

import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const SocialLoginSuccess = () => {
  const error = useSelector(selectError);

  return (
    <>
      {!error ? (
        <>
          <BlackTitle>please wait...</BlackTitle>
          <BlueH2>signing you in...</BlueH2>
        </>
      ) : null}
    </>
  );
};

export default SocialLoginSuccess;
