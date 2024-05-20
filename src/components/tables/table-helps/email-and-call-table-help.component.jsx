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
    <BlueH2>viewing / hiding emails & phone numbers</BlueH2>
    <Text>
      by default, user email addresses and phone numbers are hidden for privacy
      reasons.
    </Text>
    <Text>
      if you want to view an email or phone number, you can tap on the eye icon
      next to it.
    </Text>
    <Text>tapping again will toggle it back to hidden again.</Text>
    <Text>note that this choice only applies whilst you're on the page.</Text>
    <Text>
      when you leave the page, the data will go back to being hidden again.
    </Text>
  </>
);

export default EmailAndCallTableHelp;
