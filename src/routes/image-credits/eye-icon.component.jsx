import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";

const EyeIcon = () => (
  <ParentDiv>
    <BlueH2>eye icon:</BlueH2>
    <Text>
      <a className="red" href="https://icons8.com/icon/60022/eye">
        eye
      </a>{" "}
      icon by{" "}
      <a className="red" href="https://icons8.com">
        Icons8
      </a>
    </Text>
    <BlackHr />
    <Text>
      <a className="red" href="https://icons8.com/icon/34226/hide">
        Hide
      </a>{" "}
      icon by{" "}
      <a className="red" href="https://icons8.com">
        Icons8
      </a>
    </Text>
  </ParentDiv>
);

export default EyeIcon;
