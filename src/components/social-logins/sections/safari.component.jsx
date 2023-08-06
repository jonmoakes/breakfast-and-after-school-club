import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const Safari = () => (
  <>
    <BlueH2>safari:</BlueH2>
    <Text>
      on your iPhone or iPad, go into "settings", then "safari" and then scroll
      down until you see the "prevent cross site tracking" option.
    </Text>
    <Text>
      uncheck this button to enable cross site tracking. you will then be able
      to use the social sign methods.
    </Text>
    <Text>
      after you have signed in, go back to the prevent cross site tracking
      option and re-enable it.
    </Text>
    <Text>
      on a macbook / iMac, when in safari, tap on "safari" in the top left of
      the screen, then tap "preferences".
    </Text>
    <Text>
      then tap "privacy" and then uncheck the "prevent cross site tracking"
      option.
    </Text>
    <Text>re-enable it after you have signed in.</Text>
  </>
);

export default Safari;
