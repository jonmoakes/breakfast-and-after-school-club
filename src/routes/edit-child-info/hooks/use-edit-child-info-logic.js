import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetEditChildInfoSelectors from "../../../hooks/get-selectors/use-get-edit-child-info-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { editChildInfoAsync } from "../../../store/edit-child-info/edit-child-info.thunks";

import {
  confirmUpdateChildMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import {
  enterChildsAge,
  enterChildsName,
} from "../../../strings/errors/errors-strings";
import { entriesAreTheSameMessage } from "../../../strings/infos/infos-strings";

// receive updatedChildInfo from confirmAndCancelButtons,  which receives it from useHandleUpdatedChildInfoChange
const useEditChildInfoLogic = (updatedChildInfo) => {
  const {
    $id,
    childName,
    age,
    consent,
    medicalInfo,
    dietryRequirements,
    additionalInfo,
    childToEditInfo,
  } = useGetEditChildInfoSelectors();
  const { databaseId, childrenCollectionId: collectionId } =
    useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  //renaming to save typing updatedChildInfo.propertyName all the time.
  const {
    childName: updatedChildName = "",
    age: updatedAge = "",
    consent: updatedConsent = "",
    medicalInfo: updatedMedicalInfo = "",
    dietryRequirements: updatedDietryRequirements = "",
    additionalInfo: updatedAdditionalInfo = "",
  } = updatedChildInfo || {};

  const confirmResult = () => {
    dispatch(
      editChildInfoAsync({
        $id,
        databaseId,
        collectionId,
        updatedChildInfo,
      })
    );
  };

  const entriesAreTheSame = () => {
    return childName === updatedChildName &&
      age === updatedAge &&
      consent === updatedConsent &&
      medicalInfo === updatedMedicalInfo &&
      dietryRequirements === updatedDietryRequirements &&
      additionalInfo === updatedAdditionalInfo
      ? true
      : false;
  };

  const confirmUpdateChildInfo = () => {
    if (entriesAreTheSame()) {
      fireSwal("error", entriesAreTheSameMessage, "", 0, true, false);
    } else if (!updatedChildName) {
      fireSwal("error", enterChildsName, "", 0, true, false);
    } else if (!updatedAge) {
      fireSwal("error", enterChildsAge, "", 0, true, false);
    } else {
      confirmSwal(confirmUpdateChildMessage, "", imSureMessage, () =>
        confirmResult()
      );
    }
  };

  // properties are used in useHandleUpdatedChildInfoChange
  // childtoEditInfo is used in usePreventShowIfNoData
  return {
    confirmUpdateChildInfo,
    $id,
    childName,
    age,
    consent,
    medicalInfo,
    dietryRequirements,
    additionalInfo,
    childToEditInfo,
  };
};

export default useEditChildInfoLogic;
