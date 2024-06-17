import Balancer from "react-wrap-balancer";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { useLocation } from "react-router-dom";
import { bookedSessionsUserRoute } from "../../../strings/routes/routes-strings";

const BookedSessionsUserToggleBookings = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path === bookedSessionsUserRoute ? (
        <>
          <BlackHr />
          <BlueH2>
            <Balancer>view every booking you've ever made:</Balancer>
          </BlueH2>
          <Text>
            by default, this table shows you bookings that you have made from
            the current date onwards.
          </Text>
          <Text>
            to show every booking that you have ever made, tap the 'show all
            bookings' button.
          </Text>
          <Text>
            please note that this may take a while to load if you have many
            bookings, so please be patient.
          </Text>
          <Text>
            when showing bookings for the current date onwards, the search box
            will not show bookings from past dates if you search for them.
          </Text>
          <Text>
            please switch to viewing all bookings in order to search for past
            bookings.
          </Text>
          <Text>
            please note, that in order for this button to show, no entries in
            the table should be selected.
          </Text>
        </>
      ) : (
        <>
          <BlackHr />
          <BlueH2>
            <Balancer>view bookings from the current date onwards:</Balancer>
          </BlueH2>
          <Text>
            this table only shows you every booking that you have ever made.
          </Text>
          <Text>
            usually, you should only need to view bookings in the past if you
            have a query about a past booking.
          </Text>
          <Text>
            to show bookings that are from the current date onwards, tap the
            blue 'view future bookings' link under the page title.
          </Text>
        </>
      )}
    </>
  );
};

export default BookedSessionsUserToggleBookings;
