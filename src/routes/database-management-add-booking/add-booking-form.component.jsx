import useDbManageAddBookingVariables from "./hooks/use-db-manage-add-booking-variables";
import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useConfirmAddBooking from "./hooks/use-confirm-add-booking";

import SwitchUserOfAppChoice from "../database-management/db-management-shared-components/switch-user-of-app-choice.component";
import AddBookingInstructionsAccordion from "./add-booking-instructions-accordion.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { Text } from "../../styles/p/p.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const UpdateBookingForm = () => {
  const {
    errorId,
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
    userOfAppChoice,
    sessionPrice,
  } = useDbManageAddBookingVariables();
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { confirmAddBookingDocument } = useConfirmAddBooking();

  return (
    <>
      <SwitchUserOfAppChoice {...{ userOfAppChoice }} />

      <AddBookingInstructionsAccordion />

      {userOfAppChoice || errorId === "2" ? (
        <ParentDiv>
          <Text>please enter the booking details below.</Text>
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
              inputMode="numeric"
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

            <YellowGreenButton
              type="button"
              onClick={() =>
                confirmAddBookingDocument(
                  date,
                  sessionType,
                  childrenInBooking,
                  parentName,
                  parentPhoneNumber,
                  parentsUserId,
                  parentEmail,
                  sessionPrice
                )
              }
            >
              add booking
            </YellowGreenButton>
          </Form>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default UpdateBookingForm;
