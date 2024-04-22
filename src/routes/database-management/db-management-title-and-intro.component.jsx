import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const DbManagementTitleAndIntro = () => (
  <>
    <ParentDiv>
      <BlackTitle>database management</BlackTitle>
    </ParentDiv>

    <ParentDiv>
      <Text>here, you can view and update data in your database.</Text>
      <Text>
        <RedSpan>
          please note, editing the database can break the app if not done
          correctly!
        </RedSpan>
      </Text>
      <Text>
        please contact jonathan if you have any queries at all before
        proceeding.
      </Text>
    </ParentDiv>
  </>
);

export default DbManagementTitleAndIntro;
