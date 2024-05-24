import BackgroundImage from "./background-image.component";
import CancelIcon from "./cancel-icon.component";
import DeleteIcon from "./delete-icon.component";
import InfoIcon from "./info-icon.component";
import PdfIcon from "./pdf-icon.component";
import PhoneAndEmailIcons from "./phone-and-email-icons.component";
import SadFace from "./sad-face.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes/routes-strings";
import EyeIcon from "./eye-icon.component";

const ImageCredits = () => (
  <Container>
    <ParentDiv>
      <BlackTitle>image credits</BlackTitle>
    </ParentDiv>

    <ParentDiv>
      <Text>
        thank you to all of the following creators who have kindly provided
        images and icons for this product!
      </Text>
      <Text>
        please be sure to check out their work by tapping on the links below!
      </Text>
    </ParentDiv>

    <SadFace />
    <PhoneAndEmailIcons />
    <InfoIcon />
    <CancelIcon />
    <PdfIcon />
    <DeleteIcon />
    <BackgroundImage />
    <EyeIcon />

    <ParentDiv>
      <Text>are we missing an image attribution?</Text>
      <Text>
        please <StyledLink to={contactRoute}>contact us</StyledLink> with your
        details!
      </Text>
    </ParentDiv>
  </Container>
);

export default ImageCredits;
