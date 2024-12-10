import useGetEditChildInfoSelectors from "../../../hooks/get-selectors/use-get-edit-child-info-selectors";
import useEditChildInfoThunk from "../../..//hooks/get-actions-and-thunks/edit-child-info-actions-and-thunks/use-edit-child-info-thunk";
import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  confirmUpdateChildMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import {
  cantIncludeCommaMessage,
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
    dietaryRequirements,
    additionalInfo,
    childToEditInfo,
    editChildInfoError,
    editChildInfoResult,
  } = useGetEditChildInfoSelectors();
  const { editChildInfoThunk } = useEditChildInfoThunk();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  //renaming to save typing updatedChildInfo.propertyName all the time.
  const {
    childName: updatedChildName = "",
    age: updatedAge = "",
    consent: updatedConsent = "",
    medicalInfo: updatedMedicalInfo = "",
    dietaryRequirements: updatedDietaryRequirements = "",
    additionalInfo: updatedAdditionalInfo = "",
  } = updatedChildInfo || {};

  const confirmResult = () => {
    editChildInfoThunk(updatedChildInfo);
  };

  const entriesAreTheSame = () => {
    return childName === updatedChildName &&
      age === updatedAge &&
      consent === updatedConsent &&
      medicalInfo === updatedMedicalInfo &&
      dietaryRequirements === updatedDietaryRequirements &&
      additionalInfo === updatedAdditionalInfo
      ? true
      : false;
  };

  const confirmUpdateChildInfo = () => {
    if (entriesAreTheSame()) {
      fireSwal("error", entriesAreTheSameMessage, "", 0, true, false);
    } else if (!updatedChildName) {
      fireSwal("error", enterChildsName, "", 0, true, false);
    } else if (updatedChildName.includes(",")) {
      fireSwal("error", cantIncludeCommaMessage, "", 0, true, false);
    } else if (!updatedAge) {
      fireSwal("error", enterChildsAge, "", 0, true, false);
    } else {
      confirmSwal(confirmUpdateChildMessage, "", imSureMessage, () =>
        confirmResult()
      );
    }
  };

  // removes part of the error message for user readability.
  const errorTextToRemove = editChildInfoError
    ? editChildInfoError.indexOf("must be")
    : null;

  const ageErrorForUser = errorTextToRemove
    ? `the childs age ${editChildInfoError.slice(errorTextToRemove)}`
    : null;

  // properties are used in useHandleUpdatedChildInfoChange
  // childtoEditInfo is used in usePreventShowIfNoData
  return {
    confirmUpdateChildInfo,
    $id,
    childName,
    age,
    consent,
    medicalInfo,
    dietaryRequirements,
    additionalInfo,
    childToEditInfo,
    ageErrorForUser,
    editChildInfoError,
    editChildInfoResult,
  };
};

export default useEditChildInfoLogic;
