import { useEffect } from "react";
import { useSelector } from "react-redux";

import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";
import { selectUpdateEmailSelectors } from "../../../store/update-email/update-email.slice";

const useHideUpdateEmailPasswordOnEmpty = () => {
  const { updateEmailPasswordIsVisible } = useGetPasswordIsVisibleSelectors();
  const { updateEmailDetails } = useSelector(selectUpdateEmailSelectors);
  const { dispatchHideUpdateEmailPasswordIsVisible } =
    usePasswordIsVisibleActions();

  const { password } = updateEmailDetails;

  useEffect(() => {
    if (updateEmailPasswordIsVisible && !password.length) {
      dispatchHideUpdateEmailPasswordIsVisible();
    }
  }, [
    password,
    updateEmailPasswordIsVisible,
    dispatchHideUpdateEmailPasswordIsVisible,
  ]);
};

export default useHideUpdateEmailPasswordOnEmpty;
