import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";

import useConfirmUpdateSessionSpaces from "./hooks/use-confirm-update-session-spaces";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

const UpdateSessionSpacesForm = () => {
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { date, sessionType, numberOfChildrenInBooking } =
    useGetDatabaseManagementSelectors();
  const { confirmUpdateSessionSpaces } = useConfirmUpdateSessionSpaces();

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

      <Label>sessionType:</Label>
      <StyledInput
        type="text"
        name="sessionType"
        value={sessionType || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="formatted in camel case"
      />

      <Label>number of children in the booking:</Label>
      <StyledInput
        type="number"
        name="numberOfChildrenInBooking"
        value={numberOfChildrenInBooking || ""}
        onChange={handleDataToUpdateDocumentChange}
        placeholder="number value"
      />

      <YellowGreenButton type="button" onClick={confirmUpdateSessionSpaces}>
        update session spaces
      </YellowGreenButton>
    </Form>
  );
};

export default UpdateSessionSpacesForm;
