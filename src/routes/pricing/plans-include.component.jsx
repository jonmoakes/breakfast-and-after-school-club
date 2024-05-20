import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const PlansInclude = () => (
  <ParentDiv>
    <Text>all plans include:</Text>
    <StyledUnorderedList>
      <BlueListItem>free training</BlueListItem>
      <BlueListItem>free initial set up support</BlueListItem>
      <BlueListItem>free email and phone support</BlueListItem>
    </StyledUnorderedList>
  </ParentDiv>
);

export default PlansInclude;
