import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";

const IsBookedSessionsOwnerRouteTableHelp = () => (
  <>
    <BlackHr />
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

    <Text>
      if you tap the button to change the table filtering, please note that if
      you have a search term already entered as you swap, you will have to re
      enter the search term in order to trigger the search.
    </Text>

    <BlackHr />
    <BlueH2>viewing a childs info:</BlueH2>
    <Text>
      to view the name, age, consents choice, medical info, dietry requirements
      and additional info of the child / children in the booking, tap the small
      checkbox next to the date of the booking that you wish to view.
    </Text>
    <Text>a button will appear that says 'view child info'.</Text>
    <Text>
      tapping on it will allow you to see data that the parents have entered in
      about their child ( or children ) for your reference.
    </Text>
  </>
);

export default IsBookedSessionsOwnerRouteTableHelp;
