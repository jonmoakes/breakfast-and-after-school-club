import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import { ParentDiv } from "../../styles/div/div.styles";

import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const WalletBalanceTooLow = ({
  calculateCostOfSessionsUserWantsToBook,
  formattedSessionChoiceString,
  monthAsString,
}) => {
  const { walletBalance } = useGetCurrentUserSelectors();

  return (
    <>
      {walletBalance < calculateCostOfSessionsUserWantsToBook() ? (
        <ParentDiv>
          <Text>
            you don't have enough in your virtual wallet to cover all these
            sessions.
          </Text>
          <Text>
            please add
            <br />£
            <RedSpan>
              {(
                (calculateCostOfSessionsUserWantsToBook() - walletBalance) /
                100
              ).toFixed(2)}
            </RedSpan>
            <br />
            To your wallet in order to book all of the{" "}
            <RedSpan>{formattedSessionChoiceString()} </RedSpan>sessions for{" "}
            <RedSpan>{monthAsString}</RedSpan>
          </Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default WalletBalanceTooLow;
