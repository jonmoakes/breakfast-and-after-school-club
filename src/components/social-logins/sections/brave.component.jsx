import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";

const Brave = () => (
  <>
    <BlueH2>brave:</BlueH2>
    <Text>
      in the brave web browser, tap the lion ( 🦁 ) icon which is located in the
      address bar and then tap the "brave shields up" button to uncheck it and
      therefore disable cross site tracking.
    </Text>
    <Text>tap it again to re-enable it after you have signed in.</Text>
    <BlackHr />
    <Text>
      in chrome and firefox, the prevent cross site tracking setting is not
      enabled by default. However, if you find that the social sign in isn't
      working, please follow the instructions below depending on your browser.
    </Text>
    <BlackHr />
  </>
);

export default Brave;
