import { Link } from "react-router-dom";

import useChildInfoLogic from "./child-info-hooks/use-child-info-logic";

import { ParentDiv, TableEditsButtonDiv } from "../../styles/div/div.styles";
import {
  EditEntryButton,
  RemoveEntryButton,
} from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

import {
  editChildInfoRoute,
  deleteChildInfoRoute,
} from "../../strings/routes/routes-strings";

const EditRemoveButtons = ({ chosenEntry }) => {
  const {
    oneEntryHasBeenSelected,
    moreThanOneEntryHasBeenSelected,
    addChildToEdit,
    addChildToDelete,
  } = useChildInfoLogic(chosenEntry);

  return (
    <>
      {oneEntryHasBeenSelected() ? (
        <TableEditsButtonDiv>
          <>
            <Link to={editChildInfoRoute} onClick={addChildToEdit}>
              <EditEntryButton>edit child</EditEntryButton>
            </Link>

            <Link to={deleteChildInfoRoute} onClick={addChildToDelete}>
              <RemoveEntryButton>delete child</RemoveEntryButton>
            </Link>
          </>
        </TableEditsButtonDiv>
      ) : moreThanOneEntryHasBeenSelected() ? (
        <ParentDiv>
          <Text>please select just one entry in order to make edits.</Text>
          <Text>
            uncheck entries by tapping the checkboxes on the left of the table.
          </Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default EditRemoveButtons;
