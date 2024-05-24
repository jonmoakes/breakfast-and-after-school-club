import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const InfoIcon = () => (
  <ParentDiv>
    <BlueH2>info icon:</BlueH2>
    <Text>
      Info icons created by{" "}
      <a
        className="red"
        href="https://www.flaticon.com/free-icons/info"
        title="info icons"
      >
        Chanut - Flaticon
      </a>
    </Text>
  </ParentDiv>
);

export default InfoIcon;
