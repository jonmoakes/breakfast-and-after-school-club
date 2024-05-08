import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const CancelBookingIntro = () => (
  <ParentDiv>
    <Balancer>
      <Text>
        here, you can cancel a booking for a user that doesn't use the app.
      </Text>

      <Text>
        cancelling the booking will remove the booking from the database, then
        update the users balance and finally update the session spaces.
      </Text>

      <Text>lets start by getting the details of the booking to cancel.</Text>
      <Text>
        you will need the <RedSpan>booking id</RedSpan> which you can find in
        your bookings table.
      </Text>

      <Text>
        please consider copy and pasting the value to avoid any errors and
        double check you are entering the correct id so that you don't cancel
        the wrong booking.
      </Text>
    </Balancer>
  </ParentDiv>
);

export default CancelBookingIntro;
