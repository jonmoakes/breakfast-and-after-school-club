import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const ForgotPasswordRequestAccordion = () => {
  const { shouldShowElement } = useShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={dispatchShowOppositeShowElement}
        >
          <div>{shouldShowElement ? "ok, close" : "forgot password help"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <Text>forgot your password?</Text>
            <Text>
              enter your email address below and tap the "reset password" button
              and we will send you a link to reset it!
            </Text>
            <Text>
              please note, if you signed up to the app via facebook or google,
              then don't use this feature.
            </Text>
            <Text>
              to sign in, make sure you are signed into facebook or google on
              your device that you are using this app on.
            </Text>
            <Text>
              if you need to reset your password for either of those apps,
              please follow their respective products help pages.
            </Text>
            <YellowGreenButton onClick={dispatchHideShownElement}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default ForgotPasswordRequestAccordion;
