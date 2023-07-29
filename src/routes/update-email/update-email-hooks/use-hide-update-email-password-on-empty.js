import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUpdateEmailDetails } from "../../../store/update-email/update-email.selector";
import { selectUpdateEmailPasswordIsVisible } from "../../../store/password-is-visible/password-is-visible.selector";
import { hideUpdateEmailPasswordIsVisible } from "../../../store/password-is-visible/password-is-visible.slice";

const useHideUpdateEmailPasswordOnEmpty = () => {
  const updateEmailPasswordIsVisible = useSelector(
    selectUpdateEmailPasswordIsVisible
  );

  const updateEmailDetails = useSelector(selectUpdateEmailDetails);

  const dispatch = useDispatch();
  const { password } = updateEmailDetails;

  useEffect(() => {
    if (updateEmailPasswordIsVisible && !password.length) {
      dispatch(hideUpdateEmailPasswordIsVisible());
    }
  }, [password, updateEmailPasswordIsVisible, dispatch]);
};

export default useHideUpdateEmailPasswordOnEmpty;
