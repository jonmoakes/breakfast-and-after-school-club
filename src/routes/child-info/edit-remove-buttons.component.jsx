import { Link } from "react-router-dom";

import useChildInfoLogic from "./child-info-hooks/use-child-info-logic";

import UncheckEntriesInfo from "../../components/tables/uncheck-entries-info.component";

import { TableEditsButtonDiv } from "../../styles/div/div.styles";
import {
  EditEntryButton,
  RemoveEntryButton,
} from "../../styles/buttons/buttons.styles";

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
        <UncheckEntriesInfo />
      ) : null}
    </>
  );
};

export default EditRemoveButtons;
