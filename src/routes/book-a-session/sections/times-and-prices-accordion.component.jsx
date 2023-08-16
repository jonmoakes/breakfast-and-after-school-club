import { useSelector, useDispatch } from "react-redux";

import { selectShouldShowSecondElement } from "../../../store/should-show-element/should-show-element.selector";
import {
  hideSecondElement,
  toggleShowSecondElement,
} from "../../../store/should-show-element/should-show-element.slice";

import {
  SecondAccordion,
  AccordionContent,
  SecondAccordionTitle,
} from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { BlueSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const TimesAndPricesAccordion = () => {
  const shouldShowSecondElement = useSelector(selectShouldShowSecondElement);
  const dispatch = useDispatch();

  // SecondAccordion is for if there are 2 accordions on a page as they have separate states.
  return (
    <SecondAccordion className="book-session" {...{ shouldShowSecondElement }}>
      <>
        <SecondAccordionTitle
          {...{ shouldShowSecondElement }}
          onClick={() => dispatch(toggleShowSecondElement())}
        >
          <div>
            {shouldShowSecondElement ? "ok, close" : "view times & prices"}
          </div>
          <>{shouldShowSecondElement ? "-" : "+"}</>
        </SecondAccordionTitle>

        {shouldShowSecondElement && (
          <AccordionContent>
            <BlackHr />
            <Text>
              morning session:
              <br />
              7.30am &ndash; 9.00am
              <br /> cost: <BlueSpan>£4</BlueSpan>
            </Text>
            <BlackHr />
            <Text>
              afternoon session ( short ):
              <br />
              3.20pm &ndash; 4.30pm
              <br /> cost: <BlueSpan>£4</BlueSpan>
            </Text>
            <BlackHr />
            <Text>
              afternoon session ( long ):
              <br />
              3.20pm &ndash; 6pm
              <br /> cost: <BlueSpan>£7</BlueSpan>
            </Text>
            <BlackHr />
            <Text>
              morning and afternoon sessions ( short ):
              <br /> cost: <BlueSpan>£8</BlueSpan>
            </Text>
            <BlackHr />
            <Text>
              morning and afternoon sessions ( long ):
              <br /> cost: <BlueSpan>£11</BlueSpan>
            </Text>
            <BlackHr />
            <Text>
              note: the only options that will show are the options that are
              covered by the current funds in your wallet.
            </Text>
            <BlackHr />

            <YellowGreenButton onClick={() => dispatch(hideSecondElement())}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </SecondAccordion>
  );
};

export default TimesAndPricesAccordion;
