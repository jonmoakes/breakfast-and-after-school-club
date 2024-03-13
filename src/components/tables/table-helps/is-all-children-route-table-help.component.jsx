import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import EmailAndCallTableHelp from "./email-and-call-table-help.component";

const IsAllChildrenRouteTableHelp = () => (
  <>
    <BlueH2>searching for a month:</BlueH2>
    <Text>
      please search for the months name - ie 'november' as opposed to its
      numerical value ( 11 ).
    </Text>

    <BlueH2>searching for a date and month:</BlueH2>
    <Text>
      if you're searching for a date and month, for example August 12th,
      <br />
      please search for 08 august.
    </Text>
    <Text>
      you don't need to type the 'th' ie the 20th as this will not show up any
      results, even though you may have a booking on that date.
    </Text>

    <BlueH2>searching for a full date:</BlueH2>
    <Text>
      a full date would be for example '03 april 2024' or 12 december 2022.
    </Text>

    <EmailAndCallTableHelp />
  </>
);

export default IsAllChildrenRouteTableHelp;
