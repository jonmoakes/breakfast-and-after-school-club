import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useDbManageCancelBookingVariables from "./hooks/use-db-manage-cancel-booking-variables";
import useGetBookingDetails from "./hooks/use-get-booking-details";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { Text, WhiteShadowText } from "../../styles/p/p.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { RedSpan } from "../../styles/span/span.styles";
import useDatabaseManagementActions from "../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

const GetBookingToCancelForm = () => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { bookingId, userOfAppChoice, matchedBookingFound } =
    useDbManageCancelBookingVariables();
  const { dispatchSetUserOfAppChoice } = useDatabaseManagementActions();
  const { getBookingDetails } = useGetBookingDetails();

  return (
    <>
      {userOfAppChoice && !matchedBookingFound ? (
        <>
          <ParentDiv>
            <Text>
              you have chosen that the booking you want to cancel belongs to a{" "}
              <RedSpan>{userOfAppChoice}</RedSpan> of the app.
            </Text>

            <Text>need to change?</Text>
            <YellowGreenButton
              onClick={() =>
                dispatchSetUserOfAppChoice(
                  userOfAppChoice === "user" ? "non user" : "user"
                )
              }
            >
              change to{" "}
              {userOfAppChoice === "user" ? "Non User Of App" : "User Of App"}
            </YellowGreenButton>
          </ParentDiv>

          <ParentDiv>
            {userOfAppChoice === "user" ? (
              <Text>
                cancelling the booking will remove the booking from the
                database, then update the users balance and finally update the
                session spaces.
              </Text>
            ) : (
              <Text>
                cancelling the booking will remove the booking from the
                database, then update the session spaces.
              </Text>
            )}

            <Text>
              lets start by getting the details of the booking to cancel.
            </Text>

            <Text>
              you will need the <RedSpan>booking id</RedSpan> which you can find
              in your bookings table.
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
