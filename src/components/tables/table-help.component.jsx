import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  hideElement,
  toggleShowElement,
  selectShouldShowElementSelectors,
} from "../../store/should-show-element/should-show-element.slice";

import CancelBookingTableHelp from "./table-helps/cancel-booking-table-help.component";
import IsBookedSessionsOwnerRouteTableHelp from "./table-helps/is-booked-sessions-owner-route-table-help.component";
import IsAllChildrenRouteTableHelp from "./table-helps/is-all-children-route-table-help.component";
import ColourCodingTableHelp from "./table-helps/colour-coding-table-help.component";
import DownloadPdfTableHelp from "./table-helps/download-pdf-table-help.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { RedSpan } from "../../styles/span/span.styles";

import {
  allChildrenRoute,
  bookedSessionsOwnerRoute,
  bookedSessionsUserRoute,
} from "../../strings/routes/routes-strings";

const UserBookingsHelp = () => {
  const { shouldShowElement } = useSelector(selectShouldShowElementSelectors);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const isBookedSessionsOwnerRoute =
    path === bookedSessionsOwnerRoute ? true : false;

  const isAllChildrenRoute = path === allChildrenRoute && true;
  const isBookedSessionsUserRoute = path === bookedSessionsUserRoute && true;

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
        {shouldShowElement ? (
          <AccordionContent>
            <BlueH2>searching:</BlueH2>
            <Text>
              enter a search term in the search box to show only bookings that
              match that search.
            </Text>
            <Text>
              you can search for anything that will have been entered into any
              of the table headers ( ie child name etc ).
            </Text>
            {!isBookedSessionsUserRoute ? (
              <Text>
                please note however that the{" "}
                <RedSpan>email And phone number</RedSpan> values are not
                searchable ( as they are pulled into the app separately from
                other table data for data protection reasons ).
              </Text>
            ) : null}

            <BlueH2>sorting:</BlueH2>
            <Text>
              you can sort the table into ascending, descending or unsorted
              order by tapping on any of the yellow headers.
            </Text>

            {isBookedSessionsOwnerRoute ? (
              <IsBookedSessionsOwnerRouteTableHelp />
            ) : null}

            {isBookedSessionsUserRoute ? (
              <>
                <CancelBookingTableHelp />
                <DownloadPdfTableHelp />
              </>
            ) : null}

            {isAllChildrenRoute ? <IsAllChildrenRouteTableHelp /> : null}

            {!isAllChildrenRoute ? <ColourCodingTableHelp /> : null}

            <YellowGreenButton onClick={() => dispatch(hideElement())}>
              ok, close
            </YellowGreenButton>
          </AccordionContent>
        ) : null}
      </>
    </Accordion>
  );
};

export default UserBookingsHelp;
