import { useSelector, useDispatch } from "react-redux";

import { selectShouldShowElement } from "../../store/should-show-element/should-show-element.selector";
import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

const Info = () => {
  const shouldShowElement = useSelector(selectShouldShowElement);
  const dispatch = useDispatch();

  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={() => dispatch(toggleShowElement())}
        >
          <div>{shouldShowElement ? "ok, close" : "update password help"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <Text>
              here, you can request to update your password that you use to sign
              into your account.
            </Text>
            <Text>simply tap the "send request" button.</Text>
            <Text>
              you will receive a link in an email from us that when clicked,
              will send you back to our secure update password page where you
              can choose your new password.
            </Text>
            <Text>
              The verification link sent to your email address is valid for 1
              hour, after which you will have to request a new link.
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

export default Info;
