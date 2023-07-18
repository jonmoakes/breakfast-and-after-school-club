import useShowOrHideElement from "../../hooks/use-show-or-hide-element";

import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { signInRoute } from "../../strings/strings";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";

const MagicUrlInfo = () => {
  const { toggleShowHideElement, show, hideElement } = useShowOrHideElement();

  return (
    <Accordion {...{ show }}>
      <>
        <AccordionTitle {...{ show }} onClick={toggleShowHideElement}>
          <div>{show ? "ok, close" : "what is a magic url?"}</div>
          <>{show ? "-" : "+"}</>
        </AccordionTitle>

        {show && (
          <AccordionContent>
            <Text>
              a Magic URL is a new style of authentication method, which allows
              you to create an account without providing ( and therefore having
              to remember ) a password!
            </Text>
            <Text>
              enter you email below and then tap the "generate magic url"
              button.
            </Text>
            <Text>
              as you should be the only person to have access to your email, no
              one but you should receive this link.
            </Text>
            <Text>
              tap on the link in the email that you receive and you will be
              redirected to the app, where you will now be signed in with an
              anonymous account!
            </Text>
            <Text>
              please note that by 'anonymous", we mean that there is no name
              linked to your account. we only store your email in order to
              identify your account.
            </Text>
            <Text>
              from then on, tap on the "use a magic url" button in the{" "}
              <StyledLink to={signInRoute}>sign in</StyledLink> page whenever
              you want to sign in and repeat the same steps.
            </Text>
            <Text>
              a new session will be created for you each time you sign in with
              your anonymous account.
            </Text>
            <YellowGreenButton onClick={hideElement}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};
export default MagicUrlInfo;
