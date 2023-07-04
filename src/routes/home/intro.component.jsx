import ProgressiveImg from "../../components/progressive-image/progressive-image.component";
import { ImageDiv, InnerDiv, ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

import Image from "../../assets/logo.png";
import PlaceholderImage from "../../assets/placeholder-image.jpeg";

const Intro = () => (
  <ParentDiv>
    <InnerDiv className="clear-bg">
      <BlackTitle>welcome to the</BlackTitle>
      <ImageDiv className="no-padding">
        <ProgressiveImg
          src={Image}
          placeholderSrc={PlaceholderImage}
          alt="logo"
        />
      </ImageDiv>
      <BlackTitle>demo!</BlackTitle>
    </InnerDiv>
  </ParentDiv>
);

export default Intro;
