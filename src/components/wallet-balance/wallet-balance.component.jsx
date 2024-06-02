import { useLocation } from "react-router-dom";

import useWalletBalanceListener from "./wallet-balance-hooks/use-wallet-balance-listener";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import useGetWalletBalance from "./wallet-balance-hooks/use-get-wallet-balance";
import useGetUsersChildrenSelectors from "../../hooks/get-selectors/use-get-users-children-selectors";
import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import Loader from "../loader/loader.component";

import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import {
  BalanceCheckButton,
  YellowGreenButton,
} from "../../styles/buttons/buttons.styles";

import {
  addChildInfoRoute,
  bookSessionRoute,
} from "../../strings/routes/routes-strings";

const WalletBalance = () => {
  useGetWalletBalance();
  useWalletBalanceListener();
  const { confirmRequestLatestWalletBalance } = useGetWalletBalance();
  const { usersChildren } = useGetUsersChildrenSelectors();
  const { walletBalance, currentUserIsLoading } = useGetCurrentUserSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const location = useLocation();

  return (
    <>
      {currentUserIsLoading ? <Loader /> : null}
      {location.pathname === bookSessionRoute && usersChildren === undefined ? (
        <>
          <Text>
            to book a session, please add a child first by tapping on the button
            below.
          </Text>
          <YellowGreenButton
            onClick={() => hamburgerHandlerNavigate(addChildInfoRoute)}
          >
            add child
          </YellowGreenButton>
        </>
      ) : (
        <>
          <Text>
            your current wallet balance is:
            <br />
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
