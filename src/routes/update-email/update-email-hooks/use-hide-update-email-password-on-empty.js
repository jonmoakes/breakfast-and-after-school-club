import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUpdateEmailSelectors } from "../../../store/update-email/update-email.slice";
import {
  hideUpdateEmailPasswordIsVisible,
  selectPasswordIsVisibleSelectors,
} from "../../../store/password-is-visible/password-is-visible.slice";

const useHideUpdateEmailPasswordOnEmpty = () => {
  const { updateEmailPasswordIsVisible } = useSelector(
    selectPasswordIsVisibleSelectors
  );
  const { updateEmailDetails } = useSelector(selectUpdateEmailSelectors);

  const dispatch = useDispatch();
  const { password } = updateEmailDetails;

  useEffect(() => {
    if (updateEmailPasswordIsVisible && !password.length) {
      dispatch(hideUpdateEmailPasswordIsVisible());
    }
  }, [password, updateEmailPasswordIsVisible, dispatch]);
};

export default useHideUpdateEmailPasswordOnEmpty;
