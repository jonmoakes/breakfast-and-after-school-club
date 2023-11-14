import { ParentDiv, TableEditsButtonDiv } from "../../styles/div/div.styles";
import { RemoveEntryButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";
import useCheckDateAndGoToCancelBookingRoute from "./user-bookings-hooks/use-check-date-and-go-to-cancel-booking-route";

const CancelBookingButton = ({ chosenEntry }) => {
  const { checkDateAndGoToCancelBookingRoute } =
    useCheckDateAndGoToCancelBookingRoute(chosenEntry);

  return (
    <>
      {chosenEntry.length === 1 ? (
        <TableEditsButtonDiv>
          <RemoveEntryButton onClick={checkDateAndGoToCancelBookingRoute}>
            cancel booking
          </RemoveEntryButton>
        </TableEditsButtonDiv>
      ) : chosenEntry.length > 1 ? (
        <ParentDiv>
          <Text>please select just one entry.</Text>
          <Text>
            uncheck entries by tapping the checkboxes on the left of the table.
          </Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default CancelBookingButton;
