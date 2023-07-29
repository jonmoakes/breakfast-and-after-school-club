import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const WalletBalance = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { walletBalance } = currentUser;
  return (
    <>
      <Text>
        your current wallet balance is:
        <br />
        <br />
        <RedSpan>£{(walletBalance / 100).toFixed(2)}</RedSpan>
      </Text>
    </>
  );
};

export default WalletBalance;
