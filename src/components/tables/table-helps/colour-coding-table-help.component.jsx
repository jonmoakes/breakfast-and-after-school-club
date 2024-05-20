import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlackSpan } from "../../../styles/span/span.styles";
import {
  StyledUnorderedList,
  BlueListItem,
} from "../../../styles/ul/ul.styles";

const ColourCodingTableHelp = () => (
  <>
    <BlackHr />
    <BlueH2>color coding:</BlueH2>
    <Text>
      the table cells are colour coded depending on the day to make for easy
      reference.
    </Text>
    <Text>the colours are:</Text>
    <StyledUnorderedList>
      <BlueListItem>
        monday:
        <br />
        <BlackSpan>green</BlackSpan>
      </BlueListItem>
      <BlueListItem>
        tuesday:
        <br />
        <BlackSpan>white</BlackSpan>
      </BlueListItem>
      <BlueListItem>
        wednesday:
        <br />
        <BlackSpan>pink</BlackSpan>
      </BlueListItem>
      <BlueListItem>
        thursday:
        <br />
        <BlackSpan>cyan</BlackSpan>
      </BlueListItem>
      <BlueListItem>
        friday:
        <br />
        <BlackSpan>orange</BlackSpan>
      </BlueListItem>
    </StyledUnorderedList>
  </>
);

export default ColourCodingTableHelp;
