import { useDispatch, useSelector } from "react-redux";

import { selectShouldShowElement } from "../../store/should-show-element/should-show-element.selector";
import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { LowercasedSpan, BlackSpan } from "../../styles/span/span.styles";

const TableHelp = () => {
  const shouldShowElement = useSelector(selectShouldShowElement);
  const dispatch = useDispatch();
  return (
    <Accordion className="table">
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={() => dispatch(toggleShowElement())}
        >
          <div>{shouldShowElement ? "ok, close" : "show help"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>
        {shouldShowElement && (
          <AccordionContent>
            <Text>
              tap the grey button just above the table itself to toggle between
              showing every booking ever taken, or just the bookings for the
              current date.
            </Text>
            <Text>
              when showing bookings for the current date, the search box will
              not show bookings from past or future dates if you search for
              them.
            </Text>
            <Text>
              please switch to viewing all bookings in order to search for past
              or future bookings.
            </Text>

            <BlueH2>color coding:</BlueH2>
            <Text>
              the table cells are colour coded depending on the day to make for
              easy reference.
            </Text>
            <Text>the colours are:</Text>
            <ul>
              <li>
                monday:
                <br />
                <BlackSpan>green</BlackSpan>
              </li>
              <li>
                tuesday:
                <br />
                <BlackSpan>white</BlackSpan>
              </li>
              <li>
                wednesday:
                <br />
                <BlackSpan>violet</BlackSpan>
              </li>
              <li>
                thursday:
                <br />
                <BlackSpan>cyan</BlackSpan>
              </li>
              <li>
                friday:
                <br />
                <BlackSpan>orange</BlackSpan>
              </li>
            </ul>

            <BlueH2>searching dates:</BlueH2>
            <Text>
              please note, if you're searching for a date, please search for
              it's numerical value.
            </Text>
            <BlueH2>searching for a month:</BlueH2>
            <Text>for example "11" for november or "04" for april.</Text>
            <BlueH2>searching for a date and month:</BlueH2>
            <Text>
              if you're searching for a date and month, for example August 12th,
              <br />
              please search for 08-12. ( make sure to include the "-"! ).
            </Text>
            <Text>
              another example is 07-05 for July 5th, or 12-04 for December 4th.
            </Text>
            <BlueH2>searching for a full date:</BlueH2>
            <Text>
              a full date would be for example 2023-05-25 for 25th May 2023.
            </Text>
            <BlueH2>reasoning:</BlueH2>

            <Text>
              the reason we have to search for dates this way is because of the
              way the data is received & formatted from the database.
            </Text>
            <Text>
              when you've chosen a date when adding a booking, the raw value of
              the date is in the <LowercasedSpan>yyyy-mm-dd</LowercasedSpan>{" "}
              format which is the standard.
            </Text>
            <Text>
              in the uK this is not how we write dates, so the app converts the
              date to the readable format that you see in the table.
            </Text>
            <Text>
              however, the table would be unable to be sorted into date ordered
              with this formatted method, so in order to maintain this sorting
              feature, we need to use the raw
              <br />
              <LowercasedSpan>yyy-mm-dd</LowercasedSpan> value.
            </Text>
            <Text>
              if you tap the button to change the table filtering, please note
              that if you have a search term already entered as you swap, you
              will have to re enter the search term in order to trigger the
              search.
            </Text>
            <YellowGreenButton onClick={() => dispatch(hideElement())}>
              ok, close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default TableHelp;
