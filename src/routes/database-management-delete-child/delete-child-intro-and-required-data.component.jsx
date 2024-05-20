import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const DeleteChildIntroAndRequiredData = () => (
  <ParentDiv>
    <Text> on this page, you can delete a child from the database. </Text>
    <Text>
      You should only need to do this for a user who for whatever reason, does
      not use the app. ( otherwise, they can delete their children themselves ).
    </Text>

    <BlackHr />
    <Text>to do this, we need the following data:</Text>

    <StyledUnorderedList>
      <BlueListItem>
        <BlackSpan>the childs unique</BlackSpan>
        <br />
        document id
      </BlueListItem>
      <BlackHr />
    </StyledUnorderedList>
    <Text>tap on the button below to show detailed instructions.</Text>
  </ParentDiv>
);

export default DeleteChildIntroAndRequiredData;
