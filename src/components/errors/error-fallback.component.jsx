import ProgressiveImg from "../progressive-image/progressive-image.component";

import { ParentDiv, ErrorFallbackImageDiv } from "../../styles/div/div.styles";
import { ErrorFallbackButton } from "../../styles/buttons/buttons.styles";
import { ErrorImageText } from "../../styles/p/p.styles";
// import { StyledLink } from "../../styles/link/link.styles";

// import { contactRoute } from "../../strings/routes/routes-strings";

import Image from "../../assets/sad-face-emoji.jpg";
import PlaceholderImage from "../../assets/placeholder.jpg";

const ErrorFallback = () => (
  <>
    <ErrorFallbackImageDiv>
      <ProgressiveImg
        src={Image}
        placeholderSrc={PlaceholderImage}
        alt="error-image"
      />
    </ErrorFallbackImageDiv>

    <ParentDiv>
      <ErrorImageText>
        Sorry, there was an error, most likely on our end.. :({" "}
      </ErrorImageText>
      <ErrorImageText>
        Please Try Checking Your internet Connection.
      </ErrorImageText>

      <ErrorImageText>
        if you're sure you're online, please try reloading the page by tapping
        the button below.
      </ErrorImageText>
      <ErrorFallbackButton onClick={() => window.location.reload()}>
        reload the page
      </ErrorFallbackButton>
    </ParentDiv>

    {/* <ParentDiv>
      <ErrorImageText>
        and if that doesn't work, please{" "}
        <StyledLink to={contactRoute}>contact us!</StyledLink>
      </ErrorImageText>
    </ParentDiv> */}
  </>
);

export default ErrorFallback;
