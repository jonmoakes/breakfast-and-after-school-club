import Loader from "../../../loader/loader.component";

import { NotSignedInButton } from "../../../../styles/buttons/buttons.styles";

const ChildNotSignedInButton = ({
  isLoading,
  confirmUpdateRegistrationStatus,
}) => (
  <>
    {isLoading ? (
      <Loader />
    ) : (
      <NotSignedInButton
        type="button"
        onClick={confirmUpdateRegistrationStatus}
      >
        &#10006;
      </NotSignedInButton>
    )}
  </>
);

export default ChildNotSignedInButton;
