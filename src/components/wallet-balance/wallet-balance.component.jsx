import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectUsersChildren } from "../../store/get-users-children/get-users-children.selector";

import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { addChildInfoRoute, bookSessionRoute } from "../../strings/strings";
// import useWalletBalanceListener from "../../hooks/use-wallet-balance-listener";

const WalletBalance = () => {
  // useWalletBalanceListener();
  const currentUser = useSelector(selectCurrentUser);
  const usersChildren = useSelector(selectUsersChildren);
  const { walletBalance } = currentUser;

  const location = useLocation();

  return (
    <>
      {location.pathname === bookSessionRoute && usersChildren === undefined ? (
        <>
          <Text>
            to book a session, please add a child first by tapping on the blue
            link below.
          </Text>
          <StyledLink to={addChildInfoRoute}>add child</StyledLink>
        </>
      ) : (
        <Text>
          your current wallet balance is:
          <br />
          <br />
          <RedSpan>£{(walletBalance / 100).toFixed(2)}</RedSpan>
        </Text>
      )}
    </>
  );
};

export default WalletBalance;
