import BookableDatesInfo from "./bookable-dates-info.component";
import DatesListUl from "./dates-list-ul.component";

import { ParentDiv } from "../../styles/div/div.styles";

const MorningSessionsToBook = ({
  calculateCostOfSessionsUserWantsToBook,
  sessionChoice,
  formattedSessionChoiceString,
  monthAsString,
  monthlyMorningDatesAfterCurrentDateWithSessionsAvailable,
  dayChoice,
}) => (
  <>
    {calculateCostOfSessionsUserWantsToBook() === 0 ? null : sessionChoice ===
      "morning" ? (
      <ParentDiv className="bounce">
        <BookableDatesInfo
          {...{ dayChoice, formattedSessionChoiceString, monthAsString }}
        />
        {monthlyMorningDatesAfterCurrentDateWithSessionsAvailable().map(
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

export default MorningSessionsToBook;
