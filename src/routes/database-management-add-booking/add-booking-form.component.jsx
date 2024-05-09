import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useConfirmAddBooking from "./hooks/use-confirm-add-booking";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";

const UpdateBookingForm = () => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const {
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
  } = useGetDatabaseManagementSelectors();
  const { confirmAddBookingDocument } = useConfirmAddBooking();

  return (
    <Form>
      <Label>date:</Label>
      <StyledInput
        type="text"
        name="date"
        value={date || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="YYYY-MM-DD format"
      />

      <Label>session type:</Label>
      <StyledInput
        type="text"
        name="sessionType"
        value={sessionType || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="formatted in camel case"
      />

      <Label>children in the booking:</Label>
      <StyledInput
        type="text"
        name="childrenInBooking"
        value={childrenInBooking || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="lowercase text, comma separated "
      />

      <Label>parent name:</Label>
      <StyledInput
        type="text"
        name="parentName"
        value={parentName || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="lowercase text"
      />

      <Label>parent phone number:</Label>
      <StyledInput
        type="number"
        pattern="[0-9]*[.]?[0-9]+"
        name="parentPhoneNumber"
        value={parentPhoneNumber || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="11 digits"
      />

      <Label>parents user id:</Label>
      <StyledInput
        type="text"
        name="parentsUserId"
        value={parentsUserId || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="20 characters, lowercased"
      />

      <Label>parents email:</Label>
      <StyledInput
        type="text"
        name="parentEmail"
        value={parentEmail || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="lowercased"
      />

      <YellowGreenButton type="button" onClick={confirmAddBookingDocument}>
        add booking
      </YellowGreenButton>
    </Form>
  );
};

export default UpdateBookingForm;
