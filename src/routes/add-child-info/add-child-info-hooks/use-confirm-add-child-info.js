import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectAddChildInfo } from "../../../store/add-child-info/add-child-info.selector";
import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { addChildInfoAsync } from "../../../store/add-child-info/add-child-info.slice";

import {
  alreadyHaveChildNameMessage,
  cantIncludeCommaMessage,
  confirmAddChildMessage,
  enterChildsAge,
  enterChildsName,
  yesAddChild,
} from "../../../strings/strings";

const useConfirmAddChildInfo = () => {
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const childInfo = useSelector(selectAddChildInfo);
  const currentUser = useSelector(selectCurrentUser);
  const usersChildren = useSelector(selectUsersChildren);
  const envVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();
  const { childName, age } = childInfo;
  const { name, email } = currentUser;

  //childrenCollectionId is being renamed to collectionId
  const { databaseId, childrenCollectionId: collectionId } = envVariables;

  const confirmResult = () => {
    dispatch(
      addChildInfoAsync({ childInfo, name, email, databaseId, collectionId })
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
