import ProgressiveImg from "../../components/progressive-image/progressive-image.component";
import { ImageDiv, ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

import Image from "../../assets/logo.png";
import PlaceholderImage from "../../assets/placeholder-image.jpeg";

const Intro = () => (
  <ParentDiv>
    <BlackTitle>welcome to the</BlackTitle>
    <ImageDiv>
      <ProgressiveImg
        src={Image}
        placeholderSrc={PlaceholderImage}
        alt="logo"
      />
    </ImageDiv>
    <BlackTitle>demo!</BlackTitle>
  </ParentDiv>
);

export default Intro;
