import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { selectGetUsersChildrenSelectors } from "../../../store/get-users-children/get-users-children.slice";
import { addChildInfoAsync } from "../../../store/add-child-info/add-child-info.thunks";
import { selectAddChildInfoSelectors } from "../../../store/add-child-info/add-child-info.slice";

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

  const { childInfo } = useSelector(selectAddChildInfoSelectors);
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);

  const dispatch = useDispatch();

  const { childName, age, consent } = childInfo;
  const { id, name } = currentUser;
  const { databaseId, childrenCollectionId: collectionId } =
    currentUserEnvironmentVariables;

  const confirmResult = () => {
    dispatch(
      addChildInfoAsync({
        childInfo,
        id,
        name,
        databaseId,
        collectionId,
      })
    );
  };

  const usersChildrensNames =
    usersChildren !== undefined
      ? usersChildren.map((child) => child.childName)
      : [];

  const isCaseSensitiveMatch = (array, searchString) => {
    const lowerSearchString = searchString.toLowerCase();
    return array.includes(lowerSearchString);
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
    } else if (isCaseSensitiveMatch(usersChildrensNames, childName)) {
      fireSwal("error", alreadyHaveChildNameMessage, "", 0, true, false);
    } else {
      confirmSwal(confirmAddChildMessage, "", yesAddChild, confirmResult);
    }
  };

  return { confirmAddChildInfo };
};

export default useConfirmAddChildInfo;
