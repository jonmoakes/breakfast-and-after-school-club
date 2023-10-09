import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectCurrentUser } from "../../store/user/user.selector";

import { Text } from "../../styles/p/p.styles";
import { LowercasedSpan, RedSpan } from "../../styles/span/span.styles";
import { addChildInfoRoute, bookSessionRoute } from "../../strings/strings";
import { selectUsersChildren } from "../../store/get-users-children/get-users-children.selector";
import { StyledLink } from "../../styles/link/link.styles";

const WalletBalance = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { walletBalance } = currentUser;
  const usersChildren = useSelector(selectUsersChildren);

  const location = useLocation();

  return (
    <>
      {location.pathname === bookSessionRoute && usersChildren === undefined ? (
        <>
          <Text>
            to book a session, please add your child(
            <LowercasedSpan>ren</LowercasedSpan>) first by tapping on the blue
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
