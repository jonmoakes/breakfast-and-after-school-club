import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import WalletBalance from "../../components/wallet-balance/wallet-balance.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const Intro = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { name } = currentUser;

  return (
    <ParentDiv>
      <Text>welcome{name ? ` ${name}!` : "!"}</Text>
      <WalletBalance />
    </ParentDiv>
  );
};

export default Intro;
