import {
  ErrorImageOverlay,
  ErrorImageContainer,
} from "../../styles/div/div.styles";
import { ErrorFallbackButton } from "../../styles/buttons/buttons.styles";
import { ErrorImageText } from "../../styles/p/p.styles";
import { PageLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/strings";

const ErrorFallback = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl="https://i.imgur.com/g3hgqe8.png" />
    <ErrorImageText>
      Sorry, Something Has Broken! :( Please Try Checking Your internet
      Connection.
    </ErrorImageText>

    <ErrorImageText>
      Or You Can Click <PageLink to="/">Here</PageLink> To Try Returning To Our
      Home Page.
    </ErrorImageText>

    <ErrorImageText>
      if that doesn&apos;t work, click the button below to try reloading the
      page.
    </ErrorImageText>
    <ErrorFallbackButton onClick={() => window.location.reload()}>
      reload the page
    </ErrorFallbackButton>

    <ErrorImageText>
      finally, if that doesn&apos;t work, please{" "}
      <PageLink to={contactRoute}>Contact us</PageLink>
    </ErrorImageText>
  </ErrorImageOverlay>
);

export default ErrorFallback;
