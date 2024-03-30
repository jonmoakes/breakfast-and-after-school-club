import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlackSpan } from "../../../styles/span/span.styles";

const ColourCodingTableHelp = () => (
  <>
    <BlackHr />
    <BlueH2>color coding:</BlueH2>
    <Text>
      the table cells are colour coded depending on the day to make for easy
      reference.
    </Text>
    <Text>the colours are:</Text>
    <ul>
      <li>
        monday:
        <br />
        <BlackSpan>green</BlackSpan>
      </li>
      <li>
        tuesday:
        <br />
        <BlackSpan>white</BlackSpan>
      </li>
      <li>
        wednesday:
        <br />
        <BlackSpan>pink</BlackSpan>
      </li>
      <li>
        thursday:
        <br />
        <BlackSpan>cyan</BlackSpan>
      </li>
      <li>
        friday:
        <br />
        <BlackSpan>orange</BlackSpan>
      </li>
    </ul>
  </>
);

export default ColourCodingTableHelp;
