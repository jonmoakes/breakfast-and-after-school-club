import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import useDeleteChildInfoActions from "../../hooks/get-actions-and-thunks/delete-child-info-actions-and-thunks/use-delete-child-info-actions";

import { addChildToEdit } from "../../store/edit-child-info/edit-child-info.slice";

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
import useChildInfoLogic from "./child-info-hooks/use-child-info-logic";

const EditRemoveButtons = ({ chosenEntry }) => {
  const { dispatchAddChildToDelete } = useDeleteChildInfoActions();
  const { oneEntryHasBeenSelected, moreThanOneEntryHasBeenSelected } =
    useChildInfoLogic(chosenEntry);

  const dispatch = useDispatch();

  return (
    <>
      {oneEntryHasBeenSelected() ? (
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
              onClick={() => dispatchAddChildToDelete(chosenEntry)}
            >
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
