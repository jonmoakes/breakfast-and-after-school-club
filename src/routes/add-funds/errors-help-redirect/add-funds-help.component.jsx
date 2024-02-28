import { useSelector, useDispatch } from "react-redux";

import {
  hideElement,
  toggleShowElement,
  selectShouldShowElementSelectors,
} from "../../../store/should-show-element/should-show-element.slice";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";

const AddFundsHelp = () => {
  const { shouldShowElement } = useSelector(selectShouldShowElementSelectors);
  const dispatch = useDispatch();

  return (
    <Accordion className="funds-help" {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={() => dispatch(toggleShowElement())}
        >
          <div>{shouldShowElement ? "ok, close" : "add funds help"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <Text>
              to add funds to your wallet, please enter in the amount ( in
              pounds ) that would like to add.
            </Text>
            <Text>
              please enter a whole number - no decimals are permitted.
            </Text>
            <Text>the minimum that you can add is £1.</Text>
            <Text>the maximum value you can add is £100</Text>
            <Text>
              then enter in your card details in the box that appears below the
              input and then tap the "add funds" button which will appear when
              there are no errors in the form.
            </Text>
            <Text>
              once confirmed, your updated wallet balance will appear at the top
              of the account page for your reference.
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

export default AddFundsHelp;
