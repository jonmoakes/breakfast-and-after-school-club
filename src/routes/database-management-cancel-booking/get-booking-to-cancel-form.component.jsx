import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useGetBookingDetails from "./hooks/use-get-booking-details";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const GetBookingToCancelForm = () => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { bookingId } = useGetDatabaseManagementSelectors();
  const { getBookingDetails } = useGetBookingDetails();

  return (
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
  );
};

export default GetBookingToCancelForm;
