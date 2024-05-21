import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const IntellectualProperty = () => (
  <ParentDiv>
    <BlueH2>Intellectual Property:</BlueH2>
    <Text>
      All content and intellectual property rights in the app belong to{" "}
      <a className="red" href="https://www.solaris-apps.co.uk">
        solaris apps
      </a>
      .
    </Text>
  </ParentDiv>
);

export default IntellectualProperty;
