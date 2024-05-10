import useDbManageCancelBookingVariables from "./hooks/use-db-manage-cancel-booking-variables";

import SetUserOfAppChoiceButtons from "../database-management/db-management-shared-components/set-user-of-app-choice-buttons.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { RedSpan } from "../../styles/span/span.styles";

import { allUsersRoute } from "../../strings/routes/routes-strings";
import UserOrNonUserInfoAccordion from "../database-management/db-management-shared-components/user-or-non-user-info-accordion.component";
import Balancer from "react-wrap-balancer";

const CancelBookingIntro = () => {
  const { userOfAppChoice, matchedBookingFound } =
    useDbManageCancelBookingVariables();

  return (
    <>
      {!userOfAppChoice && !matchedBookingFound ? (
        <ParentDiv>
          <Balancer>
            <Text>
              on this page, you can manually cancel one of your bookings.
            </Text>
            <Text>
              is the booking you wish to cancel from a customer who doesn't use
              the app that you manually cancel bookings for ( most common )?
            </Text>

            <Text>
              Or are they a customer who does use the app to cancel their own
              bookings?
              <br />( if so, this should be very rare that you are requested to
              do cancel a booking for them ).
            </Text>

            <Text>
              if you're unsure, see if their <RedSpan>wallet balance</RedSpan>{" "}
              in your <StyledLink to={allUsersRoute}>users table</StyledLink> is
              '<RedSpan>N / A</RedSpan>'' or not.
            </Text>
            <Text>
              if the value is N / A, then it means that they are a non user of
              the app.
            </Text>
          </Balancer>

          <UserOrNonUserInfoAccordion />

          <SetUserOfAppChoiceButtons />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default CancelBookingIntro;
