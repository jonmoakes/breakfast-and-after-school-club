import useShowOrHideElement from "../../hooks/use-show-or-hide-element";

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
  const { toggleShowHideElement, show, hideElement } = useShowOrHideElement();

  return (
    <Accordion {...{ show }}>
      <>
        <AccordionTitle {...{ show }} onClick={toggleShowHideElement}>
          <div>{show ? "ok, close" : "social sign in help"}</div>
          <>{show ? "-" : "+"}</>
        </AccordionTitle>

        {show && (
          <AccordionContent>
            <Info />
            <TroubleShooting />
            <Safari />
            <Brave />
            <Chrome />
            <Firefox />
            <YellowGreenButton onClick={hideElement}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default SocialLoginInfo;
