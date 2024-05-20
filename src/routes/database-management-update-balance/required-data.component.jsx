import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const RequiredData = () => (
  <StyledUnorderedList>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>the</BlackSpan>
      <br />
      document id
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>the</BlackSpan>
      <br />
      amount to add
    </BlueListItem>
    <BlackHr />
  </StyledUnorderedList>
);

export default RequiredData;
