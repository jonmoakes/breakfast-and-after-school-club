import useGetChildrenLogic from "../book-a-session-hooks/get-children-logic/use-get-children-logic";
import useHasInsufficientFunds from "../book-a-session-hooks/has-insufficient-funds-logic/use-has-insufficient-funds";
import useGetSessionTypesAndPrices from "../book-a-session-hooks/get-session-types-and-prices/use-get-session-types-and-prices";

import WalletBalance from "../../../components/wallet-balance/wallet-balance.component";
import SessionHelpAccordion from "./session-help-accordion.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { RedSpan } from "../../../styles/span/span.styles";

import { addFundsRoute } from "../../../strings/routes/routes-strings";

const BalanceCheckAndBookSessionHelp = () => {
  const { noChildrenAddedYet } = useGetChildrenLogic();
  const { hasInsufficientFunds } = useHasInsufficientFunds();
  const { morningSessionPriceToFixed } = useGetSessionTypesAndPrices();

  return (
    <ParentDiv>
      <WalletBalance />
      {noChildrenAddedYet() ? null : !noChildrenAddedYet() &&
        hasInsufficientFunds() ? (
        <Text>
          you need at least <RedSpan>£{morningSessionPriceToFixed}</RedSpan> in
          your wallet to book a session. please{" "}
          <StyledLink to={addFundsRoute}>Add funds</StyledLink> to your account
          in order to continue.
        </Text>
      ) : (
        <SessionHelpAccordion />
      )}
    </ParentDiv>
  );
};

export default BalanceCheckAndBookSessionHelp;
