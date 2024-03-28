import { useEffect } from "react";

import useGetUpdateEmailSelectors from "../../../hooks/get-selectors/use-get-update-email-selectors";
import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

const useHideUpdateEmailPasswordOnEmpty = () => {
  const { updateEmailPasswordIsVisible } = useGetPasswordIsVisibleSelectors();
  const { password } = useGetUpdateEmailSelectors();
  const { dispatchHideUpdateEmailPasswordIsVisible } =
    usePasswordIsVisibleActions();

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
