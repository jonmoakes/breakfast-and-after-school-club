import { useSelector } from "react-redux";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import WalletBalance from "../../components/wallet-balance/wallet-balance.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const Intro = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { name, email } = currentUser;
  const { appOwnerEmail } = currentUserEnvironmentVariables;

  return (
    <ParentDiv>
      <Text>welcome{name ? ` ${name}!` : "!"}</Text>
      {email === appOwnerEmail ? null : <WalletBalance />}
    </ParentDiv>
  );
};

export default Intro;
