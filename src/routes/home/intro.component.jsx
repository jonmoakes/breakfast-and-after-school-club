import ProgressiveImg from "../../components/progressive-image/progressive-image.component";
import { ImageDiv, InnerDiv, ParentDiv } from "../../styles/div/div.styles";

import Image from "../../assets/logo.png";
import PlaceholderImage from "../../assets/placeholder-image.jpeg";

const Intro = () => (
  <ParentDiv>
    <InnerDiv className="clear-bg">
      <h1>welcome to the</h1>
      <ImageDiv className="no-padding">
        <ProgressiveImg
          src={Image}
          placeholderSrc={PlaceholderImage}
          alt="logo"
        />
      </ImageDiv>
      <h1>demo!</h1>
    </InnerDiv>
  </ParentDiv>
);

export default Intro;
