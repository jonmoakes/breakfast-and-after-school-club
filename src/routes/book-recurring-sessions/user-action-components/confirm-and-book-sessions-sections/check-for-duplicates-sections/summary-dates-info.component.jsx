import { Fragment } from "react";
import { format } from "date-fns";

import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";

import { BlueH2 } from "../../../../../styles/h2/h2.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { Text } from "../../../../../styles/p/p.styles";
import { RedSpan } from "../../../../../styles/span/span.styles";

const SummaryDatesInfo = () => {
  const { bookingsToAdd } = useBookRecurringSessionsVariables();

  return (
    <>
      <BlueH2>summary:</BlueH2>
      <BlackHr />
      <Text>
        this means that you will now be booking the following dates:
        <br />
        <br />
        <RedSpan>
          {bookingsToAdd.map((booking, index) => (
            <Fragment key={index}>
              {booking ? format(new Date(booking.date), "dd MMMM yyyy") : ""}
              <br />
            </Fragment>
          ))}
        </RedSpan>
      </Text>
    </>
  );
};

export default SummaryDatesInfo;
