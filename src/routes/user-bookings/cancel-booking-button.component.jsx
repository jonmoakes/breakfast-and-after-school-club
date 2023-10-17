import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addUserBookingToDelete } from "../../store/user-booking-to-delete/user-booking-to-delete.slice";

import { ParentDiv, TableEditsButtonDiv } from "../../styles/div/div.styles";
import { RemoveEntryButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

import { cancelBookingRoute } from "../../strings/strings";

const CancelBookingButton = ({ chosenEntry }) => {
  const dispatch = useDispatch();
  return (
    <>
      {chosenEntry.length === 1 ? (
        <TableEditsButtonDiv>
          <Link
            to={cancelBookingRoute}
            onClick={() => dispatch(addUserBookingToDelete(chosenEntry))}
          >
            <RemoveEntryButton>cancel booking</RemoveEntryButton>
          </Link>
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
