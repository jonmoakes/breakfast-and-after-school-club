import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useAddChildInfoLogic from "./use-add-child-info-logic";
import useAddChildInfoActions from "../../../hooks/get-actions/use-add-child-info-actions";

import {
  alreadyHaveChildNameMessage,
  cantIncludeCommaMessage,
  enterChildsAge,
  enterChildsName,
  consentOptionErrorMessage,
} from "../../../strings/errors/errors-strings";
import {
  confirmAddChildMessage,
  yesAddChild,
} from "../../../strings/confirms/confirms-strings";

const useConfirmAddChildInfo = () => {
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { childNameAlreadyExists, childName, age, consent } =
    useAddChildInfoLogic();
  const { dispatchAddChildInfoAsync } = useAddChildInfoActions();

  const confirmResult = () => {
    dispatchAddChildInfoAsync();
  };

  const confirmAddChildInfo = () => {
    if (!childName) {
      fireSwal("error", enterChildsName, "", 0, true, false);
      return;
    } else if (!age) {
      fireSwal("error", enterChildsAge, "", 0, true, false);
      return;
    } else if (!consent) {
      fireSwal("error", consentOptionErrorMessage, "", 0, true, false);
    } else if (childName && childName.includes(",")) {
      fireSwal("error", cantIncludeCommaMessage, "", 0, true, false);
      return;
    } else if (childNameAlreadyExists()) {
      fireSwal("error", alreadyHaveChildNameMessage, "", 0, true, false);
    } else {
      confirmSwal(confirmAddChildMessage, "", yesAddChild, confirmResult);
    }
  };

  return { confirmAddChildInfo };
};

export default useConfirmAddChildInfo;
