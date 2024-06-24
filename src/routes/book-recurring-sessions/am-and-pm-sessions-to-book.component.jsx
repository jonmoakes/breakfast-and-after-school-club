import BookableDatesInfo from "./bookable-dates-info.component";
import DatesListUl from "./dates-list-ul.component";

import { ParentDiv } from "../../styles/div/div.styles";

const AmAndPmSessionsToBook = ({
  calculateCostOfSessionsUserWantsToBook,
  sessionChoice,
  formattedSessionChoiceString,
  monthAsString,
  monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable,
  dayChoice,
}) => {
  return (
    <>
      {calculateCostOfSessionsUserWantsToBook() === 0 ? null : sessionChoice ===
          "morningAndAfternoonShort" ||
        sessionChoice === "morningAndAfternoonLong" ? (
        <ParentDiv className="bounce">
          <BookableDatesInfo
            {...{ dayChoice, formattedSessionChoiceString, monthAsString }}
          />
          {monthlyMorningAndAfternoonDatesAfterCurrentDateWithSessionsAvailable().map(
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

export default AmAndPmSessionsToBook;
