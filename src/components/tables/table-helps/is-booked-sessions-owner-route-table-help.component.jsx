import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const IsBookedSessionsOwnerRouteTableHelp = () => (
  <>
    <BlueH2>toggling current day or all time bookings:</BlueH2>
    <Text>
      tap the grey 'show all bookings' or 'show todays bookings' button to
      toggle between showing every booking ever taken, or just the bookings for
      the current date.
    </Text>
    <Text>
      when showing bookings for the current date, the search box will not show
      bookings from past or future dates if you search for them.
    </Text>
    <Text>
      please switch to viewing all bookings in order to search for past or
      future bookings.
    </Text>

    <BlueH2>viewing a childs info:</BlueH2>
    <Text>
      to view the childs name, age, consents choice, medical info, dietry
      requirements and additional info, tap the small checkbox next to the date
      of the booking that you wish to view.
    </Text>
    <Text>a button will appear that says 'view child info'.</Text>
    <Text>
      tapping on it will allow you to see data that the parents have entered in
      about their child ( or children ) for your reference.
    </Text>

    <BlueH2>emailing and calling:</BlueH2>
    <Text>
      you can email or call the parent by simply tapping on the email or phone
      number you wish to contact.
    </Text>
    <Text>
      note however, that the calling option my not be available on a desktop PC
      / laptop depending on your hardware.
    </Text>
  </>
);

export default IsBookedSessionsOwnerRouteTableHelp;
