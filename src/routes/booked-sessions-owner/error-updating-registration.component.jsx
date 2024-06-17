import useBookedSessionsOwnerVariables from "./booked-sessions-owner-hooks/use-booked-sessions-owner-variables";
import useBookedSessionsOwnerActions from "../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

import { contactRoute } from "../../strings/routes/routes-strings";

const ErrorUpdatingRegistration = () => {
  const { dispatchResetUpdateRegistrationError } =
    useBookedSessionsOwnerActions();
  const { updateRegistrationError } = useBookedSessionsOwnerVariables();

  return (
    <ParentDiv>
      <Text>there was an error updating the registration status.</Text>
      <Text>the error received was:</Text>
      <Text>
        '<RedSpan>{updateRegistrationError}</RedSpan>'
      </Text>
      <Text>
        please try again or{" "}
        <StyledLink to={contactRoute}>contact us</StyledLink> if the error
        persists.
      </Text>
      <Text>
        tap the button below to show the table so that you can try again.
      </Text>
      <YellowGreenButton onClick={() => dispatchResetUpdateRegistrationError()}>
        continue
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default ErrorUpdatingRegistration;
