import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";

const TroubleShooting = () => (
  <>
    <BlueH2>troubleshooting:</BlueH2>
    <Text>
      In order to enable our social sign in methods, we need to use cross-site
      tracking on our app. By default, Apple’s Safari browser and Brave
      software's "Brave" browser prevents cross-site tracking and will prevent
      the social sign in from working.
    </Text>
    <BlackHr />
  </>
);

export default TroubleShooting;
