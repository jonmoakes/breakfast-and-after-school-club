import RequiredData from "./required-data.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const IntroAndRequiredData = () => (
  <ParentDiv>
    <Text>
      if you're on this page, it means you should have received an email saying
      that
      <br />'
      <RedSpan>
        one of your users has requested deletion of their account
      </RedSpan>
      '
    </Text>

    <Text>
      to do this, we need the following data which you will find in the email:
    </Text>
    <RequiredData />

    <Text>tap on the button below to show detailed instructions.</Text>
  </ParentDiv>
);

export default IntroAndRequiredData;
