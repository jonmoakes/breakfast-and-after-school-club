import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";
import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";

import BookableDatesInfo from "../user-information-components/bookable-dates-info.component";
import DatesListUl from "../user-information-components/dates-list-ul.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const AmAndPmSessionsToBook = () => {
  const { totalCost, morningAndAfternoonDatesList } =
    useRecurringSessionsFunctions();
  const { sessionChoice, dayChoice } = useBookRecurringSessionsVariables();

  return (
    <>
      {totalCost() === 0 ? null : sessionChoice ===
          "morningAndAfternoonShort" ||
        sessionChoice === "morningAndAfternoonLong" ? (
        <ParentDiv className="bounce">
          <BookableDatesInfo />
          {morningAndAfternoonDatesList().map((dateDoc) => {
            return (
              <DatesListUl key={dateDoc.date} {...{ dateDoc, dayChoice }} />
            );
          })}
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AmAndPmSessionsToBook;
