import { useSelector, useDispatch } from "react-redux";

import {
  hideElement,
  toggleShowElement,
  selectShouldShowElementSelectors,
} from "../../store/should-show-element/should-show-element.slice";

import Info from "../../components/social-sign-in-browser-help/info.component";
import TroubleShooting from "../../components/social-sign-in-browser-help/troubleshooting.component";
import Safari from "../../components/social-sign-in-browser-help/safari.component";
import Brave from "../../components/social-sign-in-browser-help/brave.component";
import Chrome from "../../components/social-sign-in-browser-help/chrome.component";
import Firefox from "../../components/social-sign-in-browser-help/firefox.component";

import {
  Accordion,
  AccordionTitle,
  AccordionContent,
} from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const SocialSignInAccordion = () => {
  const { shouldShowElement } = useSelector(selectShouldShowElementSelectors);
  const dispatch = useDispatch();

  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={() => dispatch(toggleShowElement())}
        >
          <div>{shouldShowElement ? "ok, close" : "social sign in help"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <Info />
            <TroubleShooting />
            <Safari />
            <Brave />
            <Chrome />
            <Firefox />
            <YellowGreenButton onClick={() => dispatch(hideElement())}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default SocialSignInAccordion;
