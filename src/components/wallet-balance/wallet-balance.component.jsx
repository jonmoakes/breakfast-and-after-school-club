import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetWalletBalance from "./wallet-balance-hooks/use-get-wallet-balance";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectUsersChildren } from "../../store/get-users-children/get-users-children.selector";

import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BalanceCheckButton } from "../../styles/buttons/buttons.styles";

import { addChildInfoRoute, bookSessionRoute } from "../../strings/strings";

const WalletBalance = () => {
  useGetWalletBalance();
  const { confirmRequestLatestWalletBalance } = useGetWalletBalance();

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
        <>
          <Text>
            your current wallet balance is:
            <br />
            <RedSpan>£{(walletBalance / 100).toFixed(2)}</RedSpan>
          </Text>
          <BalanceCheckButton onClick={confirmRequestLatestWalletBalance}>
            not correct?
          </BalanceCheckButton>
        </>
      )}
    </>
  );
};

export default WalletBalance;
