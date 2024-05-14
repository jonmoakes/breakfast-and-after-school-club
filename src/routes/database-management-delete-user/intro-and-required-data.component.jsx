import RequiredData from "./required-data.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const IntroAndRequiredData = () => (
  <ParentDiv>
    <Text>if you're on this page, it means you should have:</Text>
    <Text>
      received an email saying that
      <br />'
      <RedSpan>
        one of your users has requested deletion of their account
      </RedSpan>
      '
    </Text>
    <Text>or</Text>
    <Text>
      you have a customer who doesn't use the app that you make or cancel
      bookings for on their behalf, and you wish to delete that user.
    </Text>
    <BlackHr />
    <Text>to do this, we need the following data:</Text>

    <RequiredData />
    <Text>tap on the button below to show detailed instructions.</Text>
  </ParentDiv>
);

export default IntroAndRequiredData;
