import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { selectEditChildInfoSelectors } from "../../../store/edit-child-info/edit-child-info.slice";
import { editChildInfoAsync } from "../../../store/edit-child-info/edit-child-info.thunks";

import {
  confirmUpdateChildMessage,
  enterChildsAge,
  enterChildsName,
  entriesAreTheSameMessage,
  imSureMessage,
} from "../../../strings/strings";

const useConfirmUpdateChildInfo = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const { childToEditInfo } = useSelector(selectEditChildInfoSelectors);
  const { currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const { databaseId, childrenCollectionId: collectionId } =
    currentUserEnvironmentVariables;

  const {
    $id,
    childName = "",
    age = "",
    medicalInfo = "",
    dietryRequirements = "",
    additionalInfo = "",
  } = childToEditInfo || {}; // Use an empty object as a fallback if originalChildInfo is undefined

  const dispatch = useDispatch();

  const confirmResult = (updatedChildInfo) => {
    dispatch(
      editChildInfoAsync({
        $id,
        databaseId,
        collectionId,
        updatedChildInfo,
      })
    );
  };

  const entriesAreTheSame = (updatedChildInfo) => {
    return childName === updatedChildInfo.childName &&
      age === updatedChildInfo.age &&
      medicalInfo === updatedChildInfo.medicalInfo &&
      dietryRequirements === updatedChildInfo.dietryRequirements &&
      additionalInfo === updatedChildInfo.additionalInfo
      ? true
      : false;
  };

  const confirmUpdateChildInfo = (updatedChildInfo) => {
    if (entriesAreTheSame(updatedChildInfo)) {
      fireSwal("error", entriesAreTheSameMessage, "", 0, true, false);
    } else if (!updatedChildInfo.childName) {
      fireSwal("error", enterChildsName, "", 0, true, false);
    } else if (!updatedChildInfo.age) {
      fireSwal("error", enterChildsAge, "", 0, true, false);
    } else {
      confirmSwal(confirmUpdateChildMessage, "", imSureMessage, () =>
        confirmResult(updatedChildInfo)
      );
    }
  };

  return { confirmUpdateChildInfo };
};

export default useConfirmUpdateChildInfo;
