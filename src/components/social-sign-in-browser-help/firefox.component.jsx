import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const Firefox = () => (
  <>
    <BlueH2>mozilla firefox:</BlueH2>
    <Text>tap the 3 horizontal lines and then tap "settings".</Text>
    <Text>then tap "privacy and security", and then choose "custom".</Text>
    <Text>
      under where it says "Choose which trackers and scripts to block", uncheck
      "cookies" then sign into the app.
    </Text>
    <Text>
      once signed in, go back to the previous settings and then choose
      "standard" option for browser privacy.
    </Text>
  </>
);

export default Firefox;
