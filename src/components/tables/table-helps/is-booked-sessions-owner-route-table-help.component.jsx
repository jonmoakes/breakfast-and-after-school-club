import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan, RedSpan } from "../../../styles/span/span.styles";

import { bookedSessionsOwnerAllBookingsRoute } from "../../../strings/routes/routes-strings";

const IsBookedSessionsOwnerRouteTableHelp = () => (
  <>
    <BlackHr />

    <BlueH2>toggling between current day or future bookings:</BlueH2>
    <Text>
      tap the grey 'show future bookings' or 'show todays bookings' button to
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
      to view the name, age, consents choice, medical info, dietary requirements
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
    <Text>
      if a child has information in their medical, dietary or additional info
      sections entered in by their parent, a<br />'<RedSpan>*</RedSpan>'
      <br /> will appear next to their name in the table.
    </Text>
    <Text>
      with this, it is easy to see which children in your session has details
      that you need to be aware of.
    </Text>
    <BlackHr />
    <BlueH2>registration check:</BlueH2>
    <Text>
      if you are viewing todays bookings, you will have a sign in and sign out
      option for each session that by default will be a red box with a cross in
      it.
    </Text>
    <Text>
      To sign a child in, tap on the red box in the 'sign in' section.
    </Text>
    <Text>to sign them out, tap on the red box in the 'sign out' section.</Text>
    <Text>
      in each case, the box will turn green with a tick in it so that you know
      who has been signed in and out.
    </Text>
    <Text>
      you can tap on the box again to revert to the previous state if you make a
      mistake.
    </Text>
    <Text>
      Note: For morning sessions, The sign in / out options will appear between
      the hours of
      <br />
      <RedSpan>7AM - 10AM inclusive</RedSpan>.
    </Text>
    <Text>
      for afternoon sessions, the sign in / out options will appear between the
      hours of
      <br />
      <RedSpan>2PM - 6PM inclusive</RedSpan>.
    </Text>
    <Text>
      you may need to reload the page if you have been on this page outside of
      these times to make the options appear.
    </Text>
  </>
);

export default IsBookedSessionsOwnerRouteTableHelp;
