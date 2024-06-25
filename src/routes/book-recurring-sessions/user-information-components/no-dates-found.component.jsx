import useGetCurrentMonthDateDataThunk from "../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-get-current-month-date-data-thunk";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";

const NoDatesFound = () => {
  const { getCurrentMonthDateDataThunk } = useGetCurrentMonthDateDataThunk();

  return (
    <ParentDiv>
      <Text>
        the day and session type choice you have selected does not contain any
        dates with spaces available.
      </Text>
      <Text>please check back often in case of cancellations!</Text>
      <Text>
        you can change your choice of date or session by tapping the buttons
        above, or tap the button below to fetch the latest data.
      </Text>
      <Text>
        if any spaces have become available, this section will change to show
        you the available dates that are on your selected day and session.
      </Text>
      <Text>
        when you tap the button, you will see a loading spinner as we fetch the
        latest data.
      </Text>
      <Text>
        if this section doesn't change when the loading spinner disappears, it
        means that there are still no sessions available.
      </Text>
      <YellowGreenButton onClick={getCurrentMonthDateDataThunk}>
        refresh
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default NoDatesFound;
