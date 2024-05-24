import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";

const PhoneAndEmailIcons = () => (
  <ParentDiv>
    <BlueH2>phone & email icons:</BlueH2>
    <Text>
      <a className="red" href="https://icons8.com/icon/jShwZ2RCyPSO/phone">
        Phone
      </a>{" "}
      icon by{" "}
      <a className="red" href="https://icons8.com">
        Icons8
      </a>
    </Text>
    <BlackHr />
    <Text>
      <a className="red" href=" https://icons8.com/icon/12623/email">
        email
      </a>{" "}
      icon by{" "}
      <a className="red" href="https://icons8.com">
        Icons8
      </a>
    </Text>
  </ParentDiv>
);

export default PhoneAndEmailIcons;
