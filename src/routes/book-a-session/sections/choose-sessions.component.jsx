import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";
import useSetDateAndTime from "../book-a-session-hooks/use-set-date-and-time";

import ChildCheckbox from "./child-checkbox.component";

import HeadingTimesAndPricesWalletBalanceOptionsInfo from "./heading-times-and-prices-wallet-balance-options-info.component";
import MorningSessionButton from "./buttons/morning-session-button.component";
import AfternoonSessionShortButton from "./buttons/afternoon-session-short-button.component";
import AfternoonSessionLongButton from "./buttons/afternoon-session-long-button.component";
import MorningAndAfternoonShortSessionButton from "./buttons/morning-and-afternoon-session-short-button.component";
import MorningAndAfternoonLongSessionButton from "./buttons/morning-and-afternoon-session-long-button.component";

import { ColumnDiv, ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";

const ChooseSessions = () => {
  useSetDateAndTime();

  const {
    dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable,
    onlyMorningSessionsAvailable,
    notTodaysOrIsTodayAndBeforeMorningCloseTime,
    isTodayAndAfterCloseTime,
    isTodayAndIsBetweenOpenAndCloseTime,
    atLeastOneChildHasBeenSelected,
    hasOneChild,
    hasMoreThanOneChild,
    latestTimeToBookAfternoonSession,
  } = useConditionalLogic();

  return (
    <>
      <ChildCheckbox />

      {dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable() ? null : isTodayAndAfterCloseTime() ? (
        <ParentDiv>
          <Text>
            sorry, the latest time for booking the afternoon session on the
            current day is {latestTimeToBookAfternoonSession}
          </Text>
        </ParentDiv>
      ) : (hasOneChild() && notTodaysOrIsTodayAndBeforeMorningCloseTime()) ||
        (hasMoreThanOneChild() &&
          atLeastOneChildHasBeenSelected() &&
          notTodaysOrIsTodayAndBeforeMorningCloseTime()) ? (
        <ParentDiv>
          <HeadingTimesAndPricesWalletBalanceOptionsInfo />
          <ColumnDiv>
            <BlackHr />
            <MorningSessionButton />
            <AfternoonSessionShortButton />
            <AfternoonSessionLongButton />
            <MorningAndAfternoonShortSessionButton />
            <MorningAndAfternoonLongSessionButton />
          </ColumnDiv>
        </ParentDiv>
      ) : (hasOneChild() && isTodayAndIsBetweenOpenAndCloseTime()) ||
        (hasMoreThanOneChild() &&
          atLeastOneChildHasBeenSelected() &&
          isTodayAndIsBetweenOpenAndCloseTime()) ? (
        <ParentDiv>
          {onlyMorningSessionsAvailable() ? (
            <Text>sorry, there are no afternoon sessions available today.</Text>
          ) : (
            <>
              <HeadingTimesAndPricesWalletBalanceOptionsInfo />
              <AfternoonSessionShortButton />
              <AfternoonSessionLongButton />
            </>
          )}
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ChooseSessions;
