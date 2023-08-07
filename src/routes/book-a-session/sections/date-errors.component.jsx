import { useSelector } from "react-redux";
import { format } from "date-fns";

import useGetRequestDateDataValues from "../book-a-session-hooks/use-get-request-date-data-values";

import {
  selectRequestDateDataErrorMessage,
  selectChosenDate,
} from "../../../store/request-date-data/request-date-data.selector";

import { WarningDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";

const DateErrors = () => {
  const { date } = useGetRequestDateDataValues();

  const dateErrorMessage = useSelector(selectRequestDateDataErrorMessage);
  const chosenDate = useSelector(selectChosenDate);

  const todaysDate = format(new Date(), "yyyy-MM-dd");

  return (
    <>
      {chosenDate && chosenDate < todaysDate ? (
        <WarningDiv>
          <Text>you chose a date in the past. please try again.</Text>
        </WarningDiv>
      ) : dateErrorMessage ? (
        <WarningDiv>
          <Text>sorry, we aren't in school on that day!</Text>
        </WarningDiv>
      ) : date === "2023-12-22" ||
        date === "2024-03-28" ||
        date === "2024-07-23" ? (
        <WarningDiv>
          <Text>
            please note, we close at 1:30pm on this date which is why no
            afternoon sessions are available.
          </Text>
        </WarningDiv>
      ) : null}
    </>
  );
};

export default DateErrors;
