import useBookedSessionsOwnerFunctions from "./booked-sessions-owner-hooks/use-booked-sessions-owner-functions";

import InfoIcon from "../../assets/info-icon.png";
import UncheckEntriesInfo from "../../components/tables/uncheck-entries-info.component";

import { Icon } from "../../styles/image/image.styles";
import { IconButton } from "../../styles/buttons/buttons.styles";

const GetChildDetailsButton = ({ chosenEntry }) => {
  const {
    passChosenEntryAndGoToChosenEntryChildDetailsRoute,
    oneEntrySelected,
    moreThanOneEntrySelectedAndShowingAllBookings,
    moreThanOneEntrySelectedAndShowingTodaysBookings,
  } = useBookedSessionsOwnerFunctions(chosenEntry);

  return (
    <>
      {oneEntrySelected() ? (
        <IconButton
          className="top-floating-button"
          onClick={passChosenEntryAndGoToChosenEntryChildDetailsRoute}
        >
          <Icon className="top-floating-button" src={InfoIcon} />
        </IconButton>
      ) : moreThanOneEntrySelectedAndShowingAllBookings() ? (
        <UncheckEntriesInfo />
      ) : (
        moreThanOneEntrySelectedAndShowingTodaysBookings() && null
      )}
    </>
  );
};

export default GetChildDetailsButton;
