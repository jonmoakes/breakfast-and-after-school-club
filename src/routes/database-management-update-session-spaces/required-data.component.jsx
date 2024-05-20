import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { StyledUnorderedList, BlueListItem } from "../../styles/ul/ul.styles";

const RequiredData = () => (
  <StyledUnorderedList>
    <BlackHr />
    <BlueListItem>
      <BlackSpan>the</BlackSpan>
      <br />
      Date
    </BlueListItem>
    <BlackHr />
    <BlueListItem>
      <BlackSpan>the</BlackSpan>
      <br />
      session type
    </BlueListItem>
    <BlackHr />
    <BlueListItem>
      <BlackSpan>the</BlackSpan>
      <br />
      number of children in the booking
    </BlueListItem>
    <BlackHr />
  </StyledUnorderedList>
);

export default RequiredData;
