import { useSelector, useDispatch } from "react-redux";

import { selectShouldShowElement } from "../../store/should-show-element/should-show-element.selector";
import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";

import Info from "./sections/info.component";
import TroubleShooting from "./sections/troubleshooting.component";
import Safari from "./sections/safari.component";
import Brave from "./sections/brave.component";
import Chrome from "./sections/chrome.component";
import Firefox from "./sections/firefox.component";

import {
  Accordion,
  AccordionTitle,
  AccordionContent,
} from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const SocialLoginInfo = () => {
  const shouldShowElement = useSelector(selectShouldShowElement);
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

export default SocialLoginInfo;
