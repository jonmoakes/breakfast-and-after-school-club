import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const AccountInfo = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { name, walletBalance } = currentUser;

  return (
    <ParentDiv>
      <Text>welcome{name ? ` ${name}!` : "!"}</Text>

      <Text>
        your current wallet balance is:
        <br />
        <br />
        <RedSpan>£{(walletBalance / 100).toFixed(2)}</RedSpan>
      </Text>
    </ParentDiv>
  );
};

export default AccountInfo;
