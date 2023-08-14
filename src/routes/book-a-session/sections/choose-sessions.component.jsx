import useCheckSpacesAvailableAndBalance from "../book-a-session-hooks/use-check-spaces-available-and-balance";

import TimesAndPricesAccordion from "./times-and-prices-accordion.component";
import MorningSessionButton from "./buttons/morning-session-button.component";
import AfternoonSessionShortButton from "./buttons/afternoon-session-short-button.component";
import AfternoonSessionLongButton from "./buttons/afternoon-session-long-button.component";
import MorningAndAfternoonShortSessionButton from "./buttons/morning-and-afternoon-session-short-button.component";
import MorningAndAfternoonLongSessionButton from "./buttons/morning-and-afternoon-session-long-button.component";

import { ColumnDiv, InnerDiv, ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { addFundsRoute } from "../../../strings/strings";

const ChooseSessions = () => {
  const { noSessionsAvailable, dateNotChosenOrDateChosenAndBalanceTooLow } =
    useCheckSpacesAvailableAndBalance();

  return (
    <>
      {dateNotChosenOrDateChosenAndBalanceTooLow() ||
      noSessionsAvailable() ? null : (
        <>
          <ParentDiv>
            <BlueH2>choose sessions:</BlueH2>
            <InnerDiv>
              <Text>
                based on your balance and the spaces available, you can choose
                the following options. tap the "view times & prices" button
                below for more details and to see if you need to{" "}
                <StyledLink to={addFundsRoute}>add more funds</StyledLink> to
                your wallet.
              </Text>
            </InnerDiv>
            <TimesAndPricesAccordion />

            <ColumnDiv>
              <BlackHr />
              <MorningSessionButton />
              <AfternoonSessionShortButton />
              <AfternoonSessionLongButton />
              <MorningAndAfternoonShortSessionButton />
              <MorningAndAfternoonLongSessionButton />
            </ColumnDiv>
          </ParentDiv>
        </>
      )}
    </>
  );
};

export default ChooseSessions;
