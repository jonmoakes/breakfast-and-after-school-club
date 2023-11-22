import { useSelector, useDispatch } from "react-redux";

import useGetSessionPrices from "../../../hooks/use-get-session-prices";

import {
  selectMorningSessionPrice,
  selectAfternoonShortSessionPrice,
  selectAfternoonLongSessionPrice,
  selectMorningAndAfternoonShortSessionPrice,
  selectMorningAndAfternoonLongSessionPrice,
} from "../../../store/session-types-and-prices/session-types-and-prices.selector";
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
  useGetSessionPrices();
  const shouldShowSecondElement = useSelector(selectShouldShowSecondElement);

  const dispatch = useDispatch();
  const morningPrice = useSelector(selectMorningSessionPrice);
  const afternoonShortPrice = useSelector(selectAfternoonShortSessionPrice);
  const afternoonLongPrice = useSelector(selectAfternoonLongSessionPrice);
  const morningAndAfternoonShortPrice = useSelector(
    selectMorningAndAfternoonShortSessionPrice
  );
  const morningAndAfternoonLongPrice = useSelector(
    selectMorningAndAfternoonLongSessionPrice
  );

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

        {shouldShowSecondElement ? (
          <AccordionContent>
            <BlackHr />
            <Text>
              morning session:
              <br />
              7.30am &ndash; 9.00am
              <br /> cost: <BlueSpan>£{morningPrice}</BlueSpan> per child.
            </Text>
            <BlackHr />
            <Text>
              afternoon session ( short ):
              <br />
              3.20pm &ndash; 4.30pm
              <br /> cost: <BlueSpan>£{afternoonShortPrice}</BlueSpan> per
              child.
            </Text>
            <BlackHr />
            <Text>
              afternoon session ( long ):
              <br />
              3.20pm &ndash; 6pm
              <br /> cost: <BlueSpan>£{afternoonLongPrice}</BlueSpan> per child.
            </Text>
            <BlackHr />
            <Text>
              morning and afternoon sessions ( short ):
              <br /> cost: <BlueSpan>
                £{morningAndAfternoonShortPrice}
              </BlueSpan>{" "}
              per child.
            </Text>
            <BlackHr />
            <Text>
              morning and afternoon sessions ( long ):
              <br /> cost: <BlueSpan>
                £{morningAndAfternoonLongPrice}
              </BlueSpan>{" "}
              per child.
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
        ) : null}
      </>
    </SecondAccordion>
  );
};

export default TimesAndPricesAccordion;
