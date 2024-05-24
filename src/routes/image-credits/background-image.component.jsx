import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const BackgroundImage = () => (
  <ParentDiv>
    <BlueH2>background image:</BlueH2>
    <Text>
      Background Crayons Image by{" "}
      <a
        className="red"
        href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1296465"
      >
        OpenClipart-Vectors
      </a>{" "}
      from{" "}
      <a
        className="red"
        href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1296465"
      >
        Pixabay
      </a>
    </Text>
  </ParentDiv>
);

export default BackgroundImage;
