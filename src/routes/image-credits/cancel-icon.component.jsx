import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const CancelIcon = () => (
  <ParentDiv>
    <BlueH2>cancel icon:</BlueH2>
    <Text>
      {" "}
      Cancel icons created by{" "}
      <a
        className="red"
        href="https://www.flaticon.com/free-icons/cancel"
        title="cancel icons"
      >
        Icon Mart - Flaticon
      </a>
    </Text>
  </ParentDiv>
);

export default CancelIcon;
