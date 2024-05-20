import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { StyledUnorderedList, BlueListItem } from "../../styles/ul/ul.styles";

const RequiredData = () => (
  <ParentDiv>
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
        Children in the booking
      </BlueListItem>
      <BlackHr />
      <BlueListItem>
        <BlackSpan>the</BlackSpan>
        <br />
        parent name
      </BlueListItem>
      <BlackHr />
      <BlueListItem>
        <BlackSpan>the</BlackSpan>
        <br />
        parent phone number
      </BlueListItem>
      <BlackHr />
      <BlueListItem>
        <BlackSpan>the</BlackSpan>
        <br />
        parents user id
      </BlueListItem>
      <BlackHr />
      <BlueListItem>
        <BlackSpan>the</BlackSpan>
        <br />
        parent email
      </BlueListItem>
      <BlackHr />
    </StyledUnorderedList>
  </ParentDiv>
);

export default RequiredData;
