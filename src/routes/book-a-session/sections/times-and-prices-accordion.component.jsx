import { useSelector, useDispatch } from "react-redux";

import {
  selectAfternoonLongSessionTime,
  selectMorningSessionTime,
  selectAfternoonShortSessionTime,
} from "../../../store/request-date-data/request-date-data.slice";
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
  const shouldShowSecondElement = useSelector(selectShouldShowSecondElement);
  const morningPrice = useSelector(selectMorningSessionPrice);
  const afternoonShortPrice = useSelector(selectAfternoonShortSessionPrice);
  const afternoonLongPrice = useSelector(selectAfternoonLongSessionPrice);
  const morningAndAfternoonShortPrice = useSelector(
    selectMorningAndAfternoonShortSessionPrice
  );
  const morningAndAfternoonLongPrice = useSelector(
    selectMorningAndAfternoonLongSessionPrice
  );
  const morningSessionTime = useSelector(selectMorningSessionTime);
  const afternoonShortSessionTime = useSelector(
    selectAfternoonShortSessionTime
  );
  const afternoonLongSessionTime = useSelector(selectAfternoonLongSessionTime);

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

        {shouldShowSecondElement ? (
          <AccordionContent>
            <BlackHr />
            <Text>
              morning session:
              <br />
              {morningSessionTime}
              <br /> cost: <BlueSpan>£{morningPrice}</BlueSpan> per child.
            </Text>
            <BlackHr />
            <Text>
              afternoon session ( short ):
              <br />
              {afternoonShortSessionTime}
              <br /> cost: <BlueSpan>£{afternoonShortPrice}</BlueSpan> per
              child.
            </Text>
            <BlackHr />
            <Text>
              afternoon session ( long ):
              <br />
              {afternoonLongSessionTime}
              <br /> cost: <BlueSpan>£{afternoonLongPrice}</BlueSpan> per child.
            </Text>
            <BlackHr />
            <Text>
              morning and afternoon sessions
              <br />( short ):
              <br /> cost: <BlueSpan>
                £{morningAndAfternoonShortPrice}
              </BlueSpan>{" "}
              per child.
            </Text>
            <BlackHr />
            <Text>
              morning and afternoon sessions
              <br />( long ):
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
