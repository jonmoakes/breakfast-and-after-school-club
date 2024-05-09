import useDatabaseManagementActions from "../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { allUsersRoute } from "../../strings/routes/routes-strings";
import useDbManageCancelBookingVariables from "./hooks/use-db-manage-cancel-booking-variables";
import { RedSpan } from "../../styles/span/span.styles";

const CancelBookingIntro = () => {
  const { dispatchSetUserOfAppChoice } = useDatabaseManagementActions();
  const { userOfAppChoice, matchedBookingFound } =
    useDbManageCancelBookingVariables();

  return (
    <>
      {!userOfAppChoice && !matchedBookingFound ? (
        <ParentDiv>
          <Text>
            is the booking you wish to cancel from a customer who doesn't use
            the app that you manually create bookings for?
          </Text>

          <Text>
            Or are they a customer who does use the app to make their own
            bookings?
          </Text>
          <Text>
            if you're unsure, see if their <RedSpan>wallet balance</RedSpan> in
            your <StyledLink to={allUsersRoute}>users table</StyledLink> is '
            <RedSpan>N / A</RedSpan>'' or not.
          </Text>
          <Text>
            if the value is N / A, then it means that they are a non user of the
            app.
          </Text>
          <YellowGreenButton
            onClick={() => dispatchSetUserOfAppChoice("non user")}
          >
            non user of app
          </YellowGreenButton>
          <BlackHr />
          <YellowGreenButton onClick={() => dispatchSetUserOfAppChoice("user")}>
            user of app
          </YellowGreenButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default CancelBookingIntro;
