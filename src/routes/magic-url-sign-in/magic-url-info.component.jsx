import { useSelector, useDispatch } from "react-redux";

import { selectShouldShowElement } from "../../store/should-show-element/should-show-element.selector";
import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";

import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute, signInRoute } from "../../strings/strings";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";

const MagicUrlInfo = () => {
  const shouldShowElement = useSelector(selectShouldShowElement);
  const dispatch = useDispatch();

  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={() => dispatch(toggleShowElement())}
        >
          <div>{shouldShowElement ? "ok, close" : "what is a magic url?"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
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
              once you have clicked on the link in the email and successfully
              signed in, the link will become invalid.
            </Text>
            <Text>
              the link is valid for one hour, so if it is not clicked within the
              1 hour time period, the link will expire and you will have to
              regenerate a new login request by reclicking on the "generate
              magic URL" button again.
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
            <Text>
              please note that if you are using the app installed on your
              homescreen rather than using it in your web browser, this method
              will open the app in your browser rather than in the home screen
              app due to the way the magic url authenticatio works.
            </Text>
            <Text>
              once you are signed in, add the app to your home screen again and
              then it will recognise your signed in status and you will be able
              to use the app as before.
            </Text>
            <Text>
              please <StyledLink to={contactRoute}>contact us</StyledLink> with
              any questions!
            </Text>
            <YellowGreenButton onClick={() => dispatch(hideElement())}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};
export default MagicUrlInfo;
