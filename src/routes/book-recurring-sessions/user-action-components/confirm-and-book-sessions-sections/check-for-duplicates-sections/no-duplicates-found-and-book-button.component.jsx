import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../../../hooks/use-recurring-sessions-functions";

import { YellowGreenButton } from "../../../../../styles/buttons/buttons.styles";
import { BlueH2 } from "../../../../../styles/h2/h2.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { Text } from "../../../../../styles/p/p.styles";
import { BlackSpan, RedSpan } from "../../../../../styles/span/span.styles";

import { removeStarFromChildrensNamesIfExists } from "../../../../../functions/remove-star-from-childrens-name-if-exists";

const NoDuplicatesFoundSummaryAndBookButton = () => {
  const { totalCost, bookSessions, hasMoreThanOneChild } =
    useRecurringSessionsFunctions();
  const { childrensNamesInBooking } = useBookRecurringSessionsVariables();

  return (
    <>
      <Text>great - no duplicate bookings were found!</Text>

      <BlueH2>summary:</BlueH2>
      <Text>
        you will be booking all of the dates in blue above{" "}
        {hasMoreThanOneChild() ? (
          <BlackSpan>
            for:
            <br />
            <RedSpan>
              {removeStarFromChildrensNamesIfExists(childrensNamesInBooking)}
            </RedSpan>
          </BlackSpan>
        ) : null}
        .
      </Text>

      <BlackHr />

      <Text>
        the total cost for these bookings is:
        <br />
        <RedSpan>£{(totalCost() / 100).toFixed(2)}</RedSpan>
      </Text>

      <BlackHr />

      <Text>
        on completion of your booking, the amount below will be deducted from
        your wallet.
      </Text>

      <Text>if you're happy with this, please tap the button below.</Text>
      <Text>
        you will get a confirmation prompt before completing the booking.
      </Text>

      <YellowGreenButton className="green" onClick={bookSessions}>
        book sessions
      </YellowGreenButton>
    </>
  );
};

export default NoDuplicatesFoundSummaryAndBookButton;
