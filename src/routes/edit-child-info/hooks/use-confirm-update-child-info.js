import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import { selectEditChildInfo } from "../../../store/edit-child-info/edit-child-info.selector";
import { enterChildsAge, enterChildsName } from "../../../strings/strings";
import { updateChildInfoAsync } from "../../../store/edit-child-info/edit-child-info.slice";

const useConfirmUpdateChildInfo = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const originalChildInfo = useSelector(selectEditChildInfo);

  const {
    childName = "",
    age = "",
    medicalInfo = "",
    dietryRequirements = "",
    additionalInfo = "",
  } = originalChildInfo || {}; // Use an empty object as a fallback if originalChildInfo is undefined

  const dispatch = useDispatch();

  const confirmResult = (updatedChildInfo) => {
    dispatch(updateChildInfoAsync({ updatedChildInfo }));
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
      fireSwal("error", "entries are the same", "", 0, true, false);
    } else if (!updatedChildInfo.childName) {
      fireSwal("error", enterChildsName, "", 0, true, false);
    } else if (!updatedChildInfo.age) {
      fireSwal("error", enterChildsAge, "", 0, true, false);
    } else {
      confirmSwal("update child details?", "", "yes, update", () =>
        confirmResult(updatedChildInfo)
      );
    }
  };

  return { confirmUpdateChildInfo };
};

export default useConfirmUpdateChildInfo;
