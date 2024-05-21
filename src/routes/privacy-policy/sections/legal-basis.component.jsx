import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlueSpan } from "../../../styles/span/span.styles";

const LegalBasis = () => (
  <ParentDiv>
    <BlueH2>Legal Basis for Processing:</BlueH2>
    <Text>
      We process your personal information based on the following legal grounds:
    </Text>
    <Text>
      <BlueSpan>Consent:</BlueSpan>
      <br />
      We require your consent to collect and process personal information,
      especially when it involves your children.
    </Text>
    <Text>
      <BlueSpan>Performance of a Contract:</BlueSpan>
      <br />
      Processing your data is necessary for managing your bookings and providing
      the services you requested.
    </Text>
    <Text>
      <BlueSpan>Legal Obligations:</BlueSpan>
      <br />
      Compliance with legal requirements and regulations.
    </Text>
    <Text>
      <BlueSpan>Legitimate Interests:</BlueSpan>
      <br />
      To improve our services, enhance user experience, and ensure the security
      of our app.
    </Text>
  </ParentDiv>
);

export default LegalBasis;
