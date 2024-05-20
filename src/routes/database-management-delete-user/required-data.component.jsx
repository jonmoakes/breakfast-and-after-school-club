import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const RequiredData = () => (
  <StyledUnorderedList>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>the list of the users</BlackSpan>
      <br />
      children ids
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>the users unique</BlackSpan>
      <br />
      document id
    </BlueListItem>
    <BlackHr />
  </StyledUnorderedList>
);

export default RequiredData;
