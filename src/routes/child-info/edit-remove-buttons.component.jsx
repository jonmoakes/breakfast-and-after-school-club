import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addChildToEdit } from "../../store/edit-child-info/edit-child-info.slice";
import { addChildToDelete } from "../../store/delete-child-info/delete-child-info.slice";

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
  const dispatch = useDispatch();

  return (
    <>
      {chosenEntry.length === 1 ? (
        <TableEditsButtonDiv>
          <>
            <Link
              to={editChildInfoRoute}
              onClick={() => dispatch(addChildToEdit(chosenEntry))}
            >
              <EditEntryButton>edit child</EditEntryButton>
            </Link>

            <Link
              to={deleteChildInfoRoute}
              onClick={() => dispatch(addChildToDelete(chosenEntry))}
            >
              <RemoveEntryButton>delete child</RemoveEntryButton>
            </Link>
          </>
        </TableEditsButtonDiv>
      ) : chosenEntry.length > 1 ? (
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
