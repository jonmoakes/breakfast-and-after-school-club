import Balancer from "react-wrap-balancer";

import useGetCurrentMonthDateDataAndUserBookingsThunk from "../../../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-get-current-month-date-data-and-user-bookings-thunk";
import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../../../hooks/use-recurring-sessions-functions";

import { YellowGreenButton } from "../../../../../styles/buttons/buttons.styles";
import { ParentDiv, PinkDiv } from "../../../../../styles/div/div.styles";
import { Text } from "../../../../../styles/p/p.styles";
import {
  BlackListItem,
  StyledUnorderedList,
} from "../../../../../styles/ul/ul.styles";

const NoDatesFound = () => {
  const { getCurrentMonthDateDataAndUserBookingsThunk } =
    useGetCurrentMonthDateDataAndUserBookingsThunk();
  const { monthAsString, dayChoice } = useBookRecurringSessionsVariables();
  const { formattedSessionChoiceString } = useRecurringSessionsFunctions();

  return (
    <ParentDiv>
      <Text>
        the day and session type choice you have selected does not contain any
        dates with spaces available.
      </Text>
      <PinkDiv>
        <Text>this means that there are either: </Text>
        <StyledUnorderedList>
          <BlackListItem>
            <Balancer>
              1: no spaces available in any of the dates above.
            </Balancer>
          </BlackListItem>
          <BlackListItem>
            <Balancer>
              2: you have already booked all of these{" "}
              {formattedSessionChoiceString()} sessions on a {dayChoice} in{" "}
              {monthAsString}.
            </Balancer>
          </BlackListItem>
        </StyledUnorderedList>
      </PinkDiv>
      <Text>
        if it is the case that there are no spaces available, please check back
        often in case of cancellations!
      </Text>
      <Text>you can tap the button below to fetch the latest data.</Text>
      <Text>
        if any spaces have become available, this section will change to show
        you the available dates that are on your selected day and session.
      </Text>
      <Text>
        when you tap the button, you will see a loading spinner as we fetch the
        latest data.
      </Text>
      <Text>
        when completed, you will have the option to check for these bookings
        again.
      </Text>
      <Text>
        if they have become available, you will see the option to book the
        sessions.
      </Text>
      <Text>
        alternatively, you can change your choice of date or session by tapping
        the session type buttons above.
      </Text>
      <YellowGreenButton onClick={getCurrentMonthDateDataAndUserBookingsThunk}>
        refresh
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default NoDatesFound;
