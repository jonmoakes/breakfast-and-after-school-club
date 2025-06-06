import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useDbManageCancelBookingVariables from "./hooks/use-db-manage-cancel-booking-variables";
import useGetBookingDetails from "./hooks/use-get-booking-details";

import SwitchUserOfAppChoice from "../database-management/db-management-shared-components/switch-user-of-app-choice.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { Text, WhiteShadowText } from "../../styles/p/p.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { contactRoute } from "../../strings/routes/routes-strings";

const GetBookingToCancelForm = () => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { bookingId, userOfAppChoice, matchedBookingFound } =
    useDbManageCancelBookingVariables();
  const { getBookingDetails } = useGetBookingDetails();

  return (
    <>
      {userOfAppChoice && !matchedBookingFound ? (
        <>
          <SwitchUserOfAppChoice {...{ userOfAppChoice }} />

          <ParentDiv>
            <Text>
              lets start by getting the details of the booking to cancel.
            </Text>

            <Text>
              you will need the <RedSpan>booking id</RedSpan> which you can find
              in your bookings table.
            </Text>
            <Text>
              please note that from here you can only cancel bookings from the
              current date onwards.
            </Text>
            <Text>
              should you need to cancel a booking in the past ( due to a dispute
              for example ), please{" "}
              <StyledLink to={contactRoute}>contact Jonathan</StyledLink>.
            </Text>

            <Text>
              please consider copy and pasting the value to avoid any errors and
              double check you are entering the correct id so that you don't
              cancel the wrong booking.
            </Text>
          </ParentDiv>

          <ParentDiv>
            <Form>
              <Label>booking id:</Label>
              <StyledInput
                type="text"
                name="bookingId"
                value={bookingId || ""}
                onChange={handleDataToUpdateDocumentChange}
                placeholder="20 characters, lowercased"
              />

              {bookingId ? (
                <YellowGreenButton type="button" onClick={getBookingDetails}>
                  get booking details
                </YellowGreenButton>
              ) : (
                <WhiteShadowText>enter a booking id</WhiteShadowText>
              )}
            </Form>
          </ParentDiv>
        </>
      ) : null}
    </>
  );
};

export default GetBookingToCancelForm;
