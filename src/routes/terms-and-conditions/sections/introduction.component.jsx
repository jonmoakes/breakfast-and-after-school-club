import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const Introduction = () => (
  <ParentDiv>
    <BlueH2>introduction</BlueH2>
    <Text>
      Welcome to breakfast and after school club, an app developed by{" "}
      <a className="red" href="https://www.solaris-apps.co.uk">
        solaris apps
      </a>{" "}
      for managing breakfast and after school club bookings.
    </Text>
    <Text>
      By using our app, you agree to these terms and conditions. We may update
      these terms from time to time, and you will be notified of any changes.
    </Text>
  </ParentDiv>
);

export default Introduction;
