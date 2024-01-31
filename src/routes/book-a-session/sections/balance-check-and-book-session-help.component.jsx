import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import WalletBalance from "../../../components/wallet-balance/wallet-balance.component";
import SessionHelpAccordion from "./session-help-accordion.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { addFundsRoute } from "../../../strings/strings";

const BalanceCheckAndBookSessionHelp = () => {
  const { hasInsufficientFunds, noChildrenAddedYet, morningSessionPrice } =
    useConditionalLogic();

  return (
    <ParentDiv>
      <WalletBalance />
      {noChildrenAddedYet() ? null : !noChildrenAddedYet() &&
        hasInsufficientFunds() ? (
        <Text>
          you need at least £{morningSessionPrice} in your wallet to book a
          session. please <StyledLink to={addFundsRoute}>Add funds</StyledLink>{" "}
          to your account in order to continue.
        </Text>
      ) : (
        <SessionHelpAccordion />
      )}
    </ParentDiv>
  );
};

export default BalanceCheckAndBookSessionHelp;
