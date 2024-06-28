import Balancer from "react-wrap-balancer";

import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../../../hooks/use-recurring-sessions-functions";

import { YellowGreenButton } from "../../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { Text } from "../../../../../styles/p/p.styles";
import { BlackSpan, RedSpan } from "../../../../../styles/span/span.styles";
import {
  BlackListItem,
  StyledUnorderedList,
} from "../../../../../styles/ul/ul.styles";
import { StyledLink } from "../../../../../styles/link/link.styles";

import { bookedSessionsUserRoute } from "../../../../../strings/routes/routes-strings";

const SummaryPriceConfirmAndOptions = () => {
  const { showConfirmButton } = useBookRecurringSessionsVariables();
  const { bookSessions, totalCost, hasMoreThanOneChild } =
    useRecurringSessionsFunctions();

  return (
    <>
      {!showConfirmButton ? (
        <>
          <BlackHr />
          <Text>
            the total price will now be:
            <br />
            <RedSpan>£{(totalCost() / 100).toFixed(2)}</RedSpan>
          </Text>
          <BlackHr />
          <Text>if you're happy with this, please tap the button below.</Text>
          <Text>
            you will get a confirmation prompt before completing the booking.
          </Text>
          <YellowGreenButton onClick={bookSessions}>
            book sessions
          </YellowGreenButton>

          <Text>
            <Balancer>
              otherwise, you can:
              <br />
            </Balancer>
          </Text>
          <StyledUnorderedList>
            <BlackListItem>
              choose another day{" "}
              {!hasMoreThanOneChild() ? <BlackSpan>or</BlackSpan> : null}
            </BlackListItem>

            <BlackListItem>
              choose another session type{" "}
              {hasMoreThanOneChild() ? <BlackSpan>or</BlackSpan> : null}
            </BlackListItem>
            {hasMoreThanOneChild() ? (
              <BlackListItem>change the children in the booking,</BlackListItem>
            ) : null}
          </StyledUnorderedList>
          <Text>
            <Balancer>
              or tap <StyledLink to={bookedSessionsUserRoute}>Here</StyledLink>{" "}
              to return to your bookings page.
            </Balancer>
          </Text>
        </>
      ) : null}
    </>
  );
};

export default SummaryPriceConfirmAndOptions;
