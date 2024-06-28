import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";
import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";

import BookableDatesInfo from "../user-information-components/bookable-dates-info.component";
import DatesListUl from "../user-information-components/dates-list-ul.component";

import { ParentDiv } from "../../../styles/div/div.styles";

// if !afternoonDatesList().length the map will return nothing.
// BookableDatesInfo will check if noMorningSessions() || noAfternoonSessions() and render no dates info, or a list of available dates if some are found.
const AfternoonSessionsToBook = () => {
  const { afternoonDatesList } = useRecurringSessionsFunctions();
  const { sessionChoice, dayChoice } = useBookRecurringSessionsVariables();

  return (
    <>
      {sessionChoice === "afternoonShort" ||
      sessionChoice === "afternoonLong" ? (
        <ParentDiv className="bounce">
          <BookableDatesInfo />
          {afternoonDatesList().map((dateDoc) => {
            return (
              <DatesListUl key={dateDoc.date} {...{ dateDoc, dayChoice }} />
            );
          })}
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AfternoonSessionsToBook;
