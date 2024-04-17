import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const EmailAndCallTableHelp = () => (
  <>
    <BlackHr />
    <BlueH2>emailing a user:</BlueH2>
    <Text>
      you can email the parent by simply tapping on the envelope icon in
      whichever row you wish.
    </Text>

    <BlueH2>calling a user:</BlueH2>
    <Text>
      in the phone number column, you can tap on the phone icon to initiate a
      call.
    </Text>
    <Text>
      please note however, that the calling option my not be available on a
      desktop PC / laptop depending on your hardware.
    </Text>
  </>
);

export default EmailAndCallTableHelp;
