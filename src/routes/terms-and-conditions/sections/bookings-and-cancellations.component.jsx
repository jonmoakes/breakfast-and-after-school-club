import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const BookingsAndCancellations = () => (
  <ParentDiv>
    <BlueH2>bookings and cancellations:</BlueH2>
    <Text>Parents can book or cancel sessions through the app.</Text>
    <Text>
      Cancellations must be made before a time specified clearly on the booking
      page before the session.
    </Text>
    <Text>
      after this cutoff time, no refunds can be given unless there is an
      agreement between the parent and the club owner.
    </Text>
    <Text>
      this agreement is between the owner and the parent and the breakfast and
      after school club app takes no responsibility for this situation.
    </Text>

    <Text>
      administrators can also make and cancel bookings through their 'database
      management' section in the app.
    </Text>
    <Text>
      this act should only occur with the approval of the parent and again,
      breakfast and after school club has no responsibility for this action,
      other than updating the database in response to an in app action from the
      administrator.
    </Text>
  </ParentDiv>
);

export default BookingsAndCancellations;
