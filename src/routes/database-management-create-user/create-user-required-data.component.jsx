import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { StyledUnorderedList, BlueListItem } from "../../styles/ul/ul.styles";

const CreateUserRequiredData = () => (
  <StyledUnorderedList>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>the customers name</BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>their email address</BlackSpan>
    </BlueListItem>
    <BlackHr />

    <BlueListItem>
      <BlackSpan>their phone number</BlackSpan>
    </BlueListItem>
    <BlackHr />
  </StyledUnorderedList>
);

export default CreateUserRequiredData;
