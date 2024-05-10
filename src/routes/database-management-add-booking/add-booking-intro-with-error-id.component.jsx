import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import useDbManageAddBookingVariables from "./hooks/use-db-manage-add-booking-variables";

const AddBookingIntroWithErrorId = () => {
  const { errorId } = useDbManageAddBookingVariables();

  return (
    <ParentDiv>
      <Text>
        if you're on this page, it means you should have received an email
        saying that:
        <br />'
        <RedSpan>
          There Was An Error Adding A Users Booking To The Database
        </RedSpan>
        '
      </Text>

      <Text>
        in the email, it has the error id of
        <br />'<RedSpan>{errorId}</RedSpan>'
      </Text>
      <Text>
        to fix the error, we need the following data which you will find in the
        email:
      </Text>
    </ParentDiv>
  );
};
export default AddBookingIntroWithErrorId;
