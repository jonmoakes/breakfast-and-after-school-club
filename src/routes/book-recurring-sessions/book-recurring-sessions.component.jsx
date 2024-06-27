import useGetCurrentMonthDateDataUsersChildrenAndBookedSessionsUserUseEffect from "../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-get-current-month-date-data-users-children-and-booked-sessions-user-use-effect";

import useRecurringSessionsFunctions from "./hooks/use-recurring-sessions-functions";
import useBookRecurringSessionsResultSwal from "./hooks/use-book-recurring-sessions-result-swal";
import useBookRecurringSessionsVariables from "./hooks/use-book-recurring-sessions-variables";

import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import BookRecurringSessionsTitleAndIntro from "./user-information-components/book-recurring-sessions-title-and-intro.component";
import NoChildrenAddedYet from "./user-information-components/no-children-added-yet.component";
import ChildrenCheckbox from "./user-action-components/children-checkbox.component";
import ChooseDay from "./user-action-components/choose-day.component";
import WalletBalanceTooLow from "./user-information-components/wallet-balance-too-low.component";
import MorningSessionsToBook from "./sessions-to-book/morning-sessions-book.component";
import AfternoonSessionsToBook from "./sessions-to-book/afternoon-sessions-to-book.component";
import ChosenDayInfoAndChooseSessionType from "./user-action-components/confirm-and-book-sessions-sections/choose-day-info-and-choose-session-type-sections/chosen-day-info-and-choose-session-type.component";
import ConfirmAndBookSessions from "./user-action-components/confirm-and-book-sessions.component";

import { Container } from "../../styles/container/container.styles";

const BookRecurringSessions = () => {
  useGetCurrentMonthDateDataUsersChildrenAndBookedSessionsUserUseEffect();
  useBookRecurringSessionsResultSwal();

  const {
    requestDateDataError,
    getUsersChildrenError,
    bookedSessionsUserError,
  } = useBookRecurringSessionsVariables();
  const {
    showLoaders,
    hasOneChildOrHasMoreThanOneChildAndAtLeastOneHasBeenSelected,
    totalCost,
  } = useRecurringSessionsFunctions();

  return (
    <Container>
      {showLoaders() ? <Loader /> : null}

      {requestDateDataError ||
      getUsersChildrenError ||
      bookedSessionsUserError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <BookRecurringSessionsTitleAndIntro />
          <NoChildrenAddedYet />

          <ChildrenCheckbox />

          {hasOneChildOrHasMoreThanOneChildAndAtLeastOneHasBeenSelected() ? (
            <>
              <ChooseDay />
              <ChosenDayInfoAndChooseSessionType />
              {totalCost() === null ? null : (
                <>
                  <MorningSessionsToBook />
                  <AfternoonSessionsToBook />
                  <WalletBalanceTooLow />
                  <ConfirmAndBookSessions />
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
