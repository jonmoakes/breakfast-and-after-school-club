import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const SadFace = () => (
  <ParentDiv>
    <BlueH2>sad face emoji:</BlueH2>
    <Text>
      Image by{" "}
      <a
        className="red"
        href="https://pixabay.com/users/ralfdesign-2031934/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4584555"
      >
        Ralf Designs
      </a>{" "}
      from{" "}
      <a
        className="red"
        href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4584555"
      >
        Pixabay
      </a>
    </Text>
  </ParentDiv>
);

export default SadFace;
