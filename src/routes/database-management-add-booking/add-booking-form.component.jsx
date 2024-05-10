import { useState } from "react";

import useDbManageAddBookingVariables from "./hooks/use-db-manage-add-booking-variables";
import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useConfirmAddBooking from "./hooks/use-confirm-add-booking";

import AddBookingInstructionsAccordion from "./add-booking-instructions-accordion.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { Text } from "../../styles/p/p.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import SwitchUserOfAppChoice from "../database-management/db-management-shared-components/switch-user-of-app-choice.component";
import AddOrCancelWhatWillHappenInfo from "../database-management/db-management-shared-components/add-or-cancel-what-will-happen.component";

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
    refundPrice,
  } = useDbManageAddBookingVariables();
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { confirmAddBookingDocument } = useConfirmAddBooking();

  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <SwitchUserOfAppChoice {...{ userOfAppChoice }} />
      <AddOrCancelWhatWillHappenInfo {...{ userOfAppChoice }} />

      <AddBookingInstructionsAccordion />

      {userOfAppChoice && !confirm ? (
        <ParentDiv>
          <Text>
            please confirm that you have read the important notes above. This
            will help you to avoid pushing any errors to the database, which can
            break the app.
          </Text>
          <Text>
            please contact jonathan if there are any questions at all before
            proceeding.
          </Text>
        </ParentDiv>
      ) : null}

      {(userOfAppChoice && confirm) || errorId === "2" ? (
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
                  refundPrice
                )
              }
            >
              add booking
            </YellowGreenButton>
          </Form>
        </ParentDiv>
      ) : userOfAppChoice ? (
        <ParentDiv>
          <YellowGreenButton onClick={() => setConfirm(true)}>
            i've read it!
          </YellowGreenButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default UpdateBookingForm;
