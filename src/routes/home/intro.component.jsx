import ProgressiveImg from "../../components/progressive-image/progressive-image.component";
import { ImageDiv, ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

import Image from "../../assets/logo-250x250.webp";
import PlaceholderImage from "../../assets/placeholder.jpg";

const Intro = () => (
  <ParentDiv>
    <ImageDiv>
      <ProgressiveImg
        src={Image}
        placeholderSrc={PlaceholderImage}
        alt="breakfast and after school club logo"
      />
    </ImageDiv>
    <BlackTitle>Effortless Childcare Management for Schools</BlackTitle>
  </ParentDiv>
);

export default Intro;
