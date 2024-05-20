import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const RequiredData = () => (
  <>
    <BlueH2>data required for this action</BlueH2>
    <Text>( you will find this information in the email ).</Text>
    <StyledUnorderedList>
      <BlackHr />
      <BlueListItem>
        <BlackSpan>the customers unique</BlackSpan>
        <br />
        user id
      </BlueListItem>
      <BlackHr />
      <BlueListItem>
        <BlackSpan>the</BlackSpan>
        <br />
        new email address
      </BlueListItem>
      <BlackHr />
    </StyledUnorderedList>
  </>
);

export default RequiredData;
