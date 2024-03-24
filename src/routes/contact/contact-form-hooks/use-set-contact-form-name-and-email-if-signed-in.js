import { useEffect } from "react";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useContactFormActions from "../../../hooks/get-actions-and-thunks/contact-form-actions-and-thunks/use-contact-form-actions";
import useGetContactFormSelectors from "../../../hooks/get-selectors/use-get-contact-form-selectors";

const useSetContactFormNameAndEmailIfSignedIn = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { name, email } = useGetContactFormSelectors();

  const {
    dispatchSetContactFormDefaultName,
    dispatchSetContactFormDefaultEmail,
  } = useContactFormActions();

  useEffect(() => {
    if (!currentUser || (name && email)) return;
    dispatchSetContactFormDefaultName();
    dispatchSetContactFormDefaultEmail();
  });
};

export default useSetContactFormNameAndEmailIfSignedIn;
