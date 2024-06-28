import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { addFundsRoute } from "../../../strings/routes/routes-strings";

const WalletBalanceTooLow = () => {
  const { walletBalance } = useGetCurrentUserSelectors();
  const { totalCost, formattedSessionChoiceString } =
    useRecurringSessionsFunctions();
  const { monthAsString } = useBookRecurringSessionsVariables();

  return (
    <>
      {walletBalance < totalCost() ? (
        <ParentDiv className="bounce">
          <Text>
            you don't have enough in your virtual wallet to cover all these
            sessions.
          </Text>
          <Text>
            please add
            <br />
            <br />
            <RedSpan>
              £{((totalCost() - walletBalance) / 100).toFixed(2)}
            </RedSpan>
            <br />
            <br />
            To your wallet in order to book these{" "}
            <RedSpan>{formattedSessionChoiceString()}</RedSpan> sessions for{" "}
            <RedSpan>{monthAsString}</RedSpan>.
          </Text>
          <Text>
            <StyledLink to={addFundsRoute}>tap here to add funds</StyledLink>
          </Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default WalletBalanceTooLow;
