import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  hideElement,
  toggleShowElement,
  selectShouldShowElementSelectors,
} from "../../store/should-show-element/should-show-element.slice";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackSpan } from "../../styles/span/span.styles";

import { yourCustomerBookingsRoute } from "../../strings/strings";

const UserBookingsHelp = () => {
  const { shouldShowElement } = useSelector(selectShouldShowElementSelectors);
  const dispatch = useDispatch();
  const location = useLocation();

  const isYourCustomerBookingsRoute = () => {
    return location.pathname === yourCustomerBookingsRoute ? true : false;
  };

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
            {isYourCustomerBookingsRoute() ? (
              <>
                <BlueH2>toggling current day or all time bookings:</BlueH2>
                <Text>
                  tap the grey 'show all bookings' or 'show todays bookings'
                  button to toggle between showing every booking ever taken, or
                  just the bookings for the current date.
                </Text>
                <Text>
                  when showing bookings for the current date, the search box
                  will not show bookings from past or future dates if you search
                  for them.
                </Text>
                <Text>
                  please switch to viewing all bookings in order to search for
                  past or future bookings.
                </Text>
                <BlueH2>viewing a childs info:</BlueH2>
                <Text>
                  to view the childs age, medical info, dietry requirements and
                  additional info, tap the small checkbox next to the date of
                  the booking that you wish to view.
                </Text>
                <Text>a button will appear that says 'view child info'.</Text>
                <Text>
                  tapping on it will allow you to see data that the parents have
                  entered in about their child for your reference.
                </Text>
              </>
            ) : null}

            {!isYourCustomerBookingsRoute() ? (
              <>
                <BlueH2>cancelling a booking:</BlueH2>
                <Text>
                  to cancel your booking, tap on the small checkbox to the left
                  of the date that you want to cancel and then tap 'cancel
                  booking'
                </Text>
                <Text>
                  once confirmed, the booking will be cancelled and the funds
                  will be added back to your virtual wallet.
                </Text>
                <Text>
                  please note that you can only cancel a booking up to 15mins
                  before it is due to start.
                </Text>
              </>
            ) : null}

            <BlueH2>searching:</BlueH2>
            <Text>
              enter a search term in the search box to show only bookings that
              match that search.
            </Text>
            <Text>
              you can search for anything that will have been entered into any
              of the table headers ( ie a date, a child name, a session type etc
              ).
            </Text>
            <BlueH2>searching for a month:</BlueH2>
            <Text>
              please search for the months name - ie 'november' as opposed to
              its numerical value ( 11 ).
            </Text>
            <BlueH2>searching for a date and month:</BlueH2>
            <Text>
              if you're searching for a date and month, for example August 12th,
              <br />
              please search for 08 august.
            </Text>
            <Text>
              you don't need to type the 'th' ie the 20th as this will not show
              up any results, even though you may have a booking on that date.
            </Text>
            <BlueH2>searching for a full date:</BlueH2>
            <Text>
              a full date would be for example '03 april 2024' or 12 december
              2022.
            </Text>

            {isYourCustomerBookingsRoute() ? (
              <>
                <Text>
                  if you tap the button to change the table filtering, please
                  note that if you have a search term already entered as you
                  swap, you will have to re enter the search term in order to
                  trigger the search.
                </Text>

                <BlueH2>child consents:</BlueH2>
                <Text>
                  on the 'consents given' section, this tells you whether the
                  parent has given permission for you to use the childs name or
                  image in any correspondence you may have ( like newsletters or
                  social media etc ).
                </Text>
                <Text>
                  if there is more than one child in the booking, they are in
                  the same order as the 'children in booking' section.
                </Text>
                <Text>
                  for example, if in the 'children in booking' section you have
                  'jo' and 'sam' and in the 'consents given' section, you have
                  'yes' and 'no', 'yes corresponds to 'jo' and 'no' corresponds
                  to sam.
                </Text>
              </>
            ) : null}

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

            <YellowGreenButton onClick={() => dispatch(hideElement())}>
              ok, close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default UserBookingsHelp;
