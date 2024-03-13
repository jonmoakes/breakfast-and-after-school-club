import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const EmailAndCallTableHelp = () => (
  <>
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
      if it says 'request number' however, this means that the user will have
      signed up through either google or facebook and would not have had to
      enter in their phone number in the sign up process.
    </Text>
    <Text>
      tapping on 'request number' in this case will result in returning a 'user
      has no phone number' message in the cell.
    </Text>
    <Text>
      if you wish, you can manually add a users phone number by asking the
      parent for it.
    </Text>
    <Text>
      once you have the number, sign in to your database and navigate to the
      'users' collection.
    </Text>
    <Text>find the name of the parent and tap on their row.</Text>
    <Text>
      tap 'data', then scroll down to the field that says 'phoneNumber' and
      enter in the parents phone number.
    </Text>
    <Text>then tap 'update'.</Text>
    <Text>
      now when you next load the table and tap 'request number', the app will
      pull in the parents number from the database and show the phone icon.
    </Text>
    <Text>you can then tap on the phone icon to initiate the call.</Text>
    <Text>
      please note however, that the calling option my not be available on a
      desktop PC / laptop depending on your hardware.
    </Text>
  </>
);

export default EmailAndCallTableHelp;
