import { BlackHr } from "../../../styles/hr/hr.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";

import { contactRoute } from "../../../strings/strings";

const Info = () => (
  <>
    <Text>
      signing in with your chosen Social Media Provider ( SMP ) is a simple and
      fast process, with the following steps.
    </Text>
    <ul>
      <li>tap your desired SMP button above.</li>
      <li>enter your login details for your SMP.</li>
      <li>A login request is then send to the SMP.</li>
      <li>
        Once the SMP confirms your identity ( or if you are already logged into
        your SMP ), you will be signed in to the app and redirected to the
        account page.
      </li>
    </ul>
    <Text>
      we only use your display name and email address from your profile in order
      to authenticate you.
    </Text>
    <Text>
      you can request that this data is deleted at anytime by signing into this
      app and then navigating to the account page. whilst there, tap the "delete
      account" button and following the instructions there.
    </Text>
    <Text>
      to remove the apps access to your SMP, please sign into either Google or
      Facebook and deauthorise the app following the instructions in their
      respective help sections ({" "}
      <StyledLink to={contactRoute}>contact us</StyledLink> if you need more
      help with this ).
    </Text>
    <Text>
      Please be patient whilst this social sign in happens. If there is any
      error, you will be clearly informed on screen.
    </Text>
    <BlackHr />
  </>
);

export default Info;
