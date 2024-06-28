import useRecurringSessionsFunctions from "../../../hooks/use-recurring-sessions-functions";

import NoDatesFound from "./no-dates-found.component";
import AlreadyBookedInfo from "./already-booked-info.component";
import SummaryDatesInfo from "./summary-dates-info.component";
import SummaryChildAndSessionInfo from "./summary-child-and-session-info.component";
import SummaryPriceConfirmAndOptions from "./summary-price-confirm-and-options.component";

import { ParentDiv } from "../../../../../styles/div/div.styles";

const BookingsWithDuplicatesRemovedInfo = () => {
  const { totalCost } = useRecurringSessionsFunctions();

  return (
    <>
      {!totalCost() ? (
        <NoDatesFound />
      ) : (
        <ParentDiv className="bounce">
          <AlreadyBookedInfo />
          <SummaryDatesInfo />
          <SummaryChildAndSessionInfo />
          <SummaryPriceConfirmAndOptions />
        </ParentDiv>
      )}
    </>
  );
};

export default BookingsWithDuplicatesRemovedInfo;
