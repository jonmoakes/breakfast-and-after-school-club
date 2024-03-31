import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const DateSearchingHelp = () => (
  <>
    <BlueH2>searching for a day:</BlueH2>
    <Text>
      please search for <RedSpan>just the first 3 letters of the day</RedSpan> -
      ie 'tue' instead of 'tuesday' or 'mon' instead of 'monday'.
    </Text>
    <BlueH2>searching for a month:</BlueH2>
    <Text>
      please search for{" "}
      <RedSpan>just the first 3 letters of the months name</RedSpan> - ie 'nov'
      instead of 'november' or its numerical value ( 11 ).
    </Text>

    <Text>this is because of how dates are stored in the database.</Text>

    <BlueH2>searching for a date and month:</BlueH2>
    <Text>
      if you're searching for a date and month, for example September 12th,
      <br />
      please search for <RedSpan>sep 12</RedSpan> or <RedSpan>oct 01</RedSpan>{" "}
      for October 1st.
    </Text>
    <Text>
      you don't need to type the 'th' ie the 20th as this will not show up any
      results, even though you may have a booking on that date.
    </Text>

    <BlueH2>searching for a full date:</BlueH2>
    <Text>
      a full date would be for example <RedSpan>tue oct 01 2024</RedSpan> or{" "}
      <RedSpan>mon dec 16 2024</RedSpan>.
    </Text>
  </>
);

export default DateSearchingHelp;
