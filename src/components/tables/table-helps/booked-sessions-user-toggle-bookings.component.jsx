import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";

const BookedSessionsUserToggleBookings = () => {
  return (
    <>
      <BlackHr />
      <BlueH2>toggling which bookings to show:</BlueH2>
      <Text>
        tap the grey 'show all bookings' or 'show bookings from today' button to
        toggle between showing every booking you've ever made, or just the
        bookings from the current date onwards.
      </Text>
      <Text>
        when showing bookings for the current date onwards, the search box will
        not show bookings from past dates if you search for them.
      </Text>
      <Text>
        please switch to viewing all bookings in order to search for past
        bookings.
      </Text>

      <Text>
        if you tap the button to change the table filtering, please note that if
        you have a search term already entered as you swap, you will have to re
        enter the search term in order to trigger the search.
      </Text>
    </>
  );
};

export default BookedSessionsUserToggleBookings;
