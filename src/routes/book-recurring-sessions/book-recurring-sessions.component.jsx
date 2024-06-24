import useGetSessionTypesAndPricesSelectors from "../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useBookSessionActions from "../../hooks/get-actions-and-thunks/book-session-actions-and-thunks/use-book-session-actions";
import useGetCurrentMonthDateDataAndConditionallyUsersChildrenUseEffect from "../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-get-current-month-date-data-and-conditionally-users-children-use-effect";
import useDayAndSessionChoiceButtons from "./hooks/use-day-and-session-choice-buttons";
import useRecurringSessionsFunctions from "./hooks/use-recurring-sessions-functions";

import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import BookRecurringSessionsTitleAndIntro from "./book-recurring-sessions-title-and-intro.component";
import ChildrenCheckbox from "./children-checkbox.component";

import ChooseDay from "./choose-day.component";
import WalletBalanceTooLow from "./wallet-balance-too-low.component";
import MorningSessionsToBook from "./morning-sessions-book.component";
import AfternoonSessionsToBook from "./afternoon-sessions-book.component";
import AmAndPmSessionsToBook from "./am-and-pm-sessions-to-book.component";
import TotalCostOfSessions from "./total-cost-of-sessions.component";

import ChosenDayInfoAndChooseSessionType from "./chosen-day-info-and-choose-session-type.component";

import { Container } from "../../styles/container/container.styles";
import { Text } from "../../styles/p/p.styles";

const BookRecurringSessions = () => {
  useGetCurrentMonthDateDataAndConditionallyUsersChildrenUseEffect();
  const { handleSetChildrenSelectedForBookingChange } = useBookSessionActions();

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
    showLoaders,
    requestDateDataError,
    getUsersChildrenError,
    noChildrenAddedYet,
    hasOneChild,
    hasMoreThanOneChild,
    usersChildren,
    atLeastOneChildHasBeenSelected,
  } = useRecurringSessionsFunctions(
    dayChoice,
    sessionChoice,
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice
  );

  console.log(monthlyMorningDatesAfterCurrentDateWithSessionsAvailable());

  // const date = new Date();
  const monthAsString = "july";
  //  format(date, "MMMM");

  return (
    <Container>
      {showLoaders() ? <Loader /> : null}

      {requestDateDataError || getUsersChildrenError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <BookRecurringSessionsTitleAndIntro {...{ monthAsString }} />

          {noChildrenAddedYet() ? (
            <Text>please add your children first</Text>
          ) : null}

          <ChildrenCheckbox
            {...{
              hasOneChild,
              hasMoreThanOneChild,
              usersChildren,
              handleSetChildrenSelectedForBookingChange,
            }}
          />

          {hasOneChild() ||
          (hasMoreThanOneChild() && atLeastOneChildHasBeenSelected()) ? (
            <>
              <ChooseDay {...{ dayChoice, dayChoiceButtons, resetChoices }} />

              <ChosenDayInfoAndChooseSessionType
                {...{ dayChoice, resetChoices, sessionChoiceButtons }}
              />
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
          ) : null}
        </>
      )}
    </Container>
  );
};

export default BookRecurringSessions;
