import useDeleteChildInfoActions from "../../../hooks/get-actions-and-thunks/delete-child-info-actions-and-thunks/use-delete-child-info-actions";
import useEditChildInfoActions from "../../../hooks/get-actions-and-thunks/edit-child-info-actions-and-thunks/use-edit-child-info-actions";

const useChildInfoLogic = (chosenEntry) => {
  const { dispatchAddChildToEdit } = useEditChildInfoActions();
  const { dispatchAddChildToDelete } = useDeleteChildInfoActions();

  const oneEntryHasBeenSelected = () => {
    return chosenEntry.length === 1 ? true : false;
  };

  const moreThanOneEntryHasBeenSelected = () => {
    return chosenEntry.length > 1 ? true : false;
  };

  const addChildToEdit = () => {
    dispatchAddChildToEdit(chosenEntry);
  };

  const addChildToDelete = () => {
    dispatchAddChildToDelete(chosenEntry);
  };

  return {
    oneEntryHasBeenSelected,
    moreThanOneEntryHasBeenSelected,
    addChildToEdit,
    addChildToDelete,
  };
};

export default useChildInfoLogic;
