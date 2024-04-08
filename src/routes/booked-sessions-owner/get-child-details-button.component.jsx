import useBookedSessionsOwnerFunctions from "./booked-sessions-owner-hooks/use-booked-sessions-owner-functions";

import InfoIcon from "../../assets/info-icon.png";

import { ParentDiv } from "../../styles/div/div.styles";

import { Text } from "../../styles/p/p.styles";
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
        <ParentDiv>
          <Text>please select just one entry.</Text>
          <Text>
            uncheck entries by tapping the checkboxes on the left of the table.
          </Text>
        </ParentDiv>
      ) : (
        moreThanOneEntrySelectedAndShowingTodaysBookings() && null
      )}
    </>
  );
};

export default GetChildDetailsButton;
