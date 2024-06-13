import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan } from "../../../styles/span/span.styles";

import { bookedSessionsOwnerAllBookingsRoute } from "../../../strings/routes/routes-strings";

const IsBookedSessionsOwnerRouteTableHelp = () => (
  <>
    <BlackHr />

    <BlueH2>toggling between current day or upcoming bookings:</BlueH2>
    <Text>
      tap the grey 'show upcoming bookings' or 'show todays bookings' button to
      toggle between showing every booking from todays date onwards, or just the
      bookings for the current date.
    </Text>
    <Text>
      when showing bookings for the current date, the search box will not show
      bookings from past or future dates if you search for them.
    </Text>
    <Text>
      similarly, when showing bookings from the current date onwards, the search
      box will not show bookings from the past if you search for them.
    </Text>
    <Text>
      please switch to viewing{" "}
      <StyledLink to={bookedSessionsOwnerAllBookingsRoute}>
        all bookings
      </StyledLink>{" "}
      in order to search for past bookings.
    </Text>

    <Text>
      if you tap the button to change the table filtering, please note that if
      you have a search term already entered as you swap, you will have to re
      enter the search term in order to trigger the search.
    </Text>

    <Text>
      please note, that in order for this button to show, no entries in the
      table should be selected.
    </Text>

    <BlackHr />

    <BlueH2>viewing a childs info:</BlueH2>
    <Text>
      to view the name, age, consents choice, medical info, dietry requirements
      and additional info of the child / children in the booking, tap the small
      checkbox next to the date of the booking that you wish to view.
    </Text>
    <Text>
      a button with the letter '<LowercasedSpan>i</LowercasedSpan>' ( for info )
      will appear in the top right of the screen.
    </Text>
    <Text>
      tapping on it will allow you to see data that the parents have entered in
      about their child ( or children ) for your reference.
    </Text>
    <Text>
      please note, only one entry at a time should be selected in order for the
      info button to appear.
    </Text>
    <BlackHr />
    <BlueH2>registration check:</BlueH2>
    <Text>
      if you have selected to show bookings from the current date, the
      checkboxes on the left of the table can also double up as a sign in / sign
      out system.
    </Text>
    <Text>
      simply check the row of each child as they come in / out of your session
      so that you can see if you have any children missing who should be there.
    </Text>
  </>
);

export default IsBookedSessionsOwnerRouteTableHelp;
