import useGetCurrentMonthDateDataAndBookingClosingTimesUseEffect from "../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-get-current-month-date-data-and-booking-closing-times-use-effect";

import useGetSessionTypesAndPricesSelectors from "../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useDayAndSessionChoiceButtons from "./hooks/use-day-and-session-choice-buttons";
import useRecurringSessionsFunctions from "./hooks/use-recurring-sessions-functions";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import { BlueH2 } from "../../styles/h2/h2.styles";

import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";
import DayChoiceInfo from "./day-choice-info.component";
import BookRecurringSessionsTitleAndIntro from "./book-recurring-sessions-title-and-intro.component";
import ChooseDay from "./choose-day.component";
import WalletBalanceTooLow from "./wallet-balance-too-low.component";
import MorningSessionsToBook from "./morning-sessions-book.component";
import AfternoonSessionsToBook from "./afternoon-sessions-book.component";
import AmAndPmSessionsToBook from "./am-and-pm-sessions-to-book.component";
import TotalCostOfSessions from "./total-cost-of-sessions.component";
import useGetRequestDateDataSelectors from "../../hooks/get-selectors/use-get-request-date-data-selectors";
import Balancer from "react-wrap-balancer";

const BookRecurringSessions = () => {
  useGetCurrentMonthDateDataAndBookingClosingTimesUseEffect();

  const { requestDateDataIsLoading, requestDateDataError } =
    useGetRequestDateDataSelectors();
  const {
    sessionTypesAndPrices,
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
  } = useGetSessionTypesAndPricesSelectors();

  const {
    dayChoice,
    sessionChoice,
    dayChoiceButtons,
    sessionChoiceButtons,
    resetChoices,
  } = useDayAndSessionChoiceButtons(
    sessionTypesAndPrices,
    afternoonShortSessionPrice
  );

  const {
    calculateCostOfSessionsUserWantsToBook,
    formattedSessionChoiceString,
    monthlyMorningDatesAfterCurrentDateWithSessionsAvailable,
    monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable,
    monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable,
  } = useRecurringSessionsFunctions(
    dayChoice,
    sessionChoice,
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice
  );

  // const date = new Date();
  const monthAsString = "july";
  //  format(date, "MMMM");

  return (
    <Container>
      {requestDateDataIsLoading ? <Loader /> : null}

      {requestDateDataError ? (
        <ShowFetchErrors />
      ) : (
        <>
          {" "}
          <BookRecurringSessionsTitleAndIntro {...{ monthAsString }} />
          <ChooseDay {...{ dayChoice, dayChoiceButtons, resetChoices }} />
          {dayChoice ? (
            <ParentDiv>
              <DayChoiceInfo {...{ dayChoice, resetChoices }} />
              <BlueH2>
                <Balancer>i want sessions in the:</Balancer>
              </BlueH2>
              <RenderButtonsList {...{ buttons: sessionChoiceButtons }} />
            </ParentDiv>
          ) : null}
          {calculateCostOfSessionsUserWantsToBook() === null ? null : (
            <>
              <WalletBalanceTooLow
                {...{
                  calculateCostOfSessionsUserWantsToBook,
                  formattedSessionChoiceString,
                  monthAsString,
                }}
              />
              <MorningSessionsToBook
                {...{
                  calculateCostOfSessionsUserWantsToBook,
                  sessionChoice,
                  formattedSessionChoiceString,
                  monthAsString,
                  monthlyMorningDatesAfterCurrentDateWithSessionsAvailable,
                  dayChoice,
                }}
              />

              <AfternoonSessionsToBook
                {...{
                  calculateCostOfSessionsUserWantsToBook,
                  sessionChoice,
                  formattedSessionChoiceString,
                  monthAsString,
                  monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable,
                  dayChoice,
                }}
              />

              <AmAndPmSessionsToBook
                {...{
                  calculateCostOfSessionsUserWantsToBook,
                  sessionChoice,
                  formattedSessionChoiceString,
                  monthAsString,
                  monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable,
                  dayChoice,
                }}
              />

              <TotalCostOfSessions
                {...{
                  calculateCostOfSessionsUserWantsToBook,
                }}
              />
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default BookRecurringSessions;
