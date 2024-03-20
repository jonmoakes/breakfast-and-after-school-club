import useBookedSessionsOwnerActions from "../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";

import { FilterEntriesButtonDiv } from "../../styles/div/div.styles";
import { GreyButton } from "../../styles/buttons/buttons.styles";
import useBookedSessionsOwnerLogic from "./logic/use-booked-sessions-owner-logic";

const ToggleBookingsShownButton = ({ data }) => {
  const { dispatchSetShowAllDates } = useBookedSessionsOwnerActions();
  const { noDataFound, allBookingsAreBeingShown } =
    useBookedSessionsOwnerLogic();

  return (
    <FilterEntriesButtonDiv>
      {noDataFound(data) ? null : allBookingsAreBeingShown(data) ? (
        <GreyButton onClick={() => dispatchSetShowAllDates(false)}>
          show todays bookings
        </GreyButton>
      ) : (
        <GreyButton onClick={() => dispatchSetShowAllDates(true)}>
          show all bookings
        </GreyButton>
      )}
    </FilterEntriesButtonDiv>
  );
};

export default ToggleBookingsShownButton;
