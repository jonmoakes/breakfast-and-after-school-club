import useShowOrHideElement from "../../hooks/use-show-or-hide-element";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const AddFundsHelp = () => {
  const { toggleShowHideElement, show, hideElement } = useShowOrHideElement();
  return (
    <Accordion className="funds-help" {...{ show }}>
      <>
        <AccordionTitle {...{ show }} onClick={toggleShowHideElement}>
          <div>{show ? "ok, close" : "add funds help"}</div>
          <>{show ? "-" : "+"}</>
        </AccordionTitle>

        {show && (
          <AccordionContent>
            <Text>
              to add funds to your wallet, please enter in the amount ( in
              pounds ) that would like to add.
            </Text>
            <Text>
              ie 10 for £10
              <br />
              or
              <br />
              5.50 for £5.50
            </Text>
            <Text>the minimum that you can add is £1.</Text>
            <Text>
              then enter in your card details in the box that appears below the
              input and then tap the "add funds" button which will appear when
              there are no errors in the form.
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

export default AddFundsHelp;
