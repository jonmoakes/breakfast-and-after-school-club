import useCheckSpacesAvailableAndBalance from "../book-a-session-hooks/use-check-spaces-available-and-balance";

import TimesAndPricesAccordion from "./times-and-prices-accordion.component";
import WalletBalance from "../../../components/wallet-balance/wallet-balance.component";
import OptionsAvailableInfo from "./options-available-info.component";
import MorningSessionButton from "./buttons/morning-session-button.component";
import AfternoonSessionShortButton from "./buttons/afternoon-session-short-button.component";
import AfternoonSessionLongButton from "./buttons/afternoon-session-long-button.component";
import MorningAndAfternoonShortSessionButton from "./buttons/morning-and-afternoon-session-short-button.component";
import MorningAndAfternoonLongSessionButton from "./buttons/morning-and-afternoon-session-long-button.component";

import { ColumnDiv, InnerDiv, ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

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
            <TimesAndPricesAccordion />
            <InnerDiv>
              <BlackHr />
              <WalletBalance />
              <BlackHr />
              <OptionsAvailableInfo />
            </InnerDiv>

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
