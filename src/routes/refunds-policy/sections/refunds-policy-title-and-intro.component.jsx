import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const RefundsPolicyTitleAndIntro = () => (
  <>
    <ParentDiv>
      <BlackTitle>refunds policy</BlackTitle>
    </ParentDiv>

    <ParentDiv>
      <Text>
        <RedSpan>Introduction</RedSpan>
        <br />
        <br />
        At breakfast and after school club, we strive to ensure that our users
        are satisfied with our services.
      </Text>
      <Text>
        This policy outlines the conditions and procedures for requesting a
        refund for services provided through our app.
      </Text>
    </ParentDiv>
  </>
);

export default RefundsPolicyTitleAndIntro;
