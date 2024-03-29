import useBookedSessionsOwnerFunctions from "./booked-sessions-owner-hooks/use-booked-sessions-owner-functions";

import { ParentDiv, TableEditsButtonDiv } from "../../styles/div/div.styles";
import { EditEntryButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

const GetChildDetailsButton = ({ chosenEntry }) => {
  const {
    passChosenEntryAndGoToChosenEntryChildDetailsRoute,
    oneEntrySelected,
    moreThanOneEntrySelected,
  } = useBookedSessionsOwnerFunctions(chosenEntry);

  return (
    <>
      {oneEntrySelected() ? (
        <TableEditsButtonDiv>
          <EditEntryButton
            onClick={passChosenEntryAndGoToChosenEntryChildDetailsRoute}
          >
            view child info
          </EditEntryButton>
        </TableEditsButtonDiv>
      ) : moreThanOneEntrySelected() ? (
        <ParentDiv>
          <Text>please select just one entry.</Text>
          <Text>
            uncheck entries by tapping the checkboxes on the left of the table.
          </Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default GetChildDetailsButton;
