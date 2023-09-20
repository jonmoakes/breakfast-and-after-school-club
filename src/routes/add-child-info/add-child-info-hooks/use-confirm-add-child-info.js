import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectAddChildInfo } from "../../../store/add-child-info/add-child-info.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { addChildInfoAsync } from "../../../store/add-child-info/add-child-info.slice";

import {
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

  const dispatch = useDispatch();
  const { childName, age } = childInfo;
  const { name, email } = currentUser;

  const confirmResult = () => {
    dispatch(addChildInfoAsync({ childInfo, name, email }));
  };

  const confirmAddChildInfo = () => {
    if (!childName) {
      fireSwal("error", enterChildsName, "", 0, true, false);
      return;
    } else if (!age) {
      fireSwal("error", enterChildsAge, "", 0, true, false);
      return;
    } else {
      confirmSwal(confirmAddChildMessage, "", yesAddChild, confirmResult);
    }
  };

  return { confirmAddChildInfo };
};

export default useConfirmAddChildInfo;
