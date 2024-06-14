import Loader from "../../../loader/loader.component";

import { IsSignedInButton } from "../../../../styles/buttons/buttons.styles";

const ChildIsSignedInButton = ({
  isLoading,
  confirmUpdateRegistrationStatus,
}) => (
  <>
    {isLoading ? (
      <Loader />
    ) : (
      <IsSignedInButton type="button" onClick={confirmUpdateRegistrationStatus}>
        &#10004;
      </IsSignedInButton>
    )}
  </>
);

export default ChildIsSignedInButton;
