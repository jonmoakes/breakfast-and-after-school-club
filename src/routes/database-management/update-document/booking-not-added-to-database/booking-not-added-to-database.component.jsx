import RequiredData from "./required-data.component";
import InputRecommendation from "../text-components/input-recommendation.component";
import UpdateBookingForm from "./update-booking-form.component";

import { Text } from "../../../../styles/p/p.styles";

const BookingNotAddedToDatabase = () => (
  <>
    <RequiredData />
    <InputRecommendation />

    <Text>
      if successful, the user should see their session appear in the bookings
      table when they next navigate to the page, or if they reload the page if
      they're already on it.
    </Text>
    <Text>
      You, as the app owner, should see the booking appear instantly in your
      bookings table. If it does not, please reload your table page.
    </Text>

    <UpdateBookingForm />
  </>
);

export default BookingNotAddedToDatabase;
