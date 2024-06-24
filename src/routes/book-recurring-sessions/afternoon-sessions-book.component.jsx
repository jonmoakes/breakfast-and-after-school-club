import BookableDatesInfo from "./bookable-dates-info.component";
import DatesListUl from "./dates-list-ul.component";

import { ParentDiv } from "../../styles/div/div.styles";

const AfternoonSessionsToBook = ({
  calculateCostOfSessionsUserWantsToBook,
  sessionChoice,
  formattedSessionChoiceString,
  monthAsString,
  monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable,
  dayChoice,
}) => {
  return (
    <>
      {calculateCostOfSessionsUserWantsToBook() === 0 ? null : sessionChoice ===
          "afternoonShort" || sessionChoice === "afternoonLong" ? (
        <ParentDiv className="bounce">
          <BookableDatesInfo
            {...{ dayChoice, formattedSessionChoiceString, monthAsString }}
          />
          {monthlyAfternoonDatesAfterCurrentDateWithSessionsAvailable().map(
            (dateDoc) => {
              return (
                <DatesListUl key={dateDoc.date} {...{ dateDoc, dayChoice }} />
              );
            }
          )}
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AfternoonSessionsToBook;
