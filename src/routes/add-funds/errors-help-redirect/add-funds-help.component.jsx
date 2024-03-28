import useGetShouldShowElementSelectors from "../../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";

const AddFundsHelp = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <Accordion className="funds-help" {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={dispatchShowOppositeShowElement}
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
              you can enter a whole number or a decimal number ( ie 4.50 for
              £4.50 ). please note that if you add more places after the decimal
              by mistake, the amount will be rounded to 2 decimal places.
            </Text>
            <Text>the minimum that you can add is £0.50.</Text>
            <Text>the maximum value you can add at a time is £200</Text>
            <Text>
              then enter in your card details in the box that appears below the
              input and then tap the "add funds" button which will appear when
              there are no errors in the form.
            </Text>
            <Text>
              once confirmed, your updated wallet balance will appear at the top
              of the account page for your reference.
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

export default AddFundsHelp;
