import { useLocation } from "react-router-dom";

import useGetShouldShowelementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import RateLimitHelp from "./table-helps/rate-limit-help.component";
import CancelBookingTableHelp from "./table-helps/cancel-booking-table-help.component";
import IsBookedSessionsOwnerRouteTableHelp from "./table-helps/is-booked-sessions-owner-route-table-help.component";
import ColourCodingTableHelp from "./table-helps/colour-coding-table-help.component";
import DownloadPdfTableHelp from "./table-helps/download-pdf-table-help.component";
import DateSearchingHelp from "./table-helps/date-searching-help.component";
import EmailAndCallTableHelp from "./table-helps/email-and-call-table-help.component";
import BookedSessionsUserToggleBookings from "./table-helps/booked-sessions-user-toggle-bookings.component";
import IncomeTableHelp from "./table-helps/income-table-help.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import {
  allChildrenRoute,
  allUsersRoute,
  bookedSessionsOwnerAllBookingsRoute,
  bookedSessionsOwnerRoute,
  bookedSessionsUserAllBookingsRoute,
  bookedSessionsUserRoute,
  incomeRoute,
} from "../../strings/routes/routes-strings";

const TableHelp = () => {
  const { shouldShowElement } = useGetShouldShowelementSelectors();

  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  const location = useLocation();
  const path = location.pathname;

  const isBookedSessionsOwnerRoute = path === bookedSessionsOwnerRoute && true;
  const isAllChildrenRoute = path === allChildrenRoute && true;
  const isBookedSessionsUserRoute = path === bookedSessionsUserRoute && true;
  const isBookedSessionsUserAllBookingsRoute =
    path === bookedSessionsUserAllBookingsRoute && true;
  const isAllUsersRoute = path === allUsersRoute && true;
  const isIncomeRoute = path === incomeRoute && true;
  const isBookedSessionUserAllBookingsRoute =
    path === bookedSessionsUserAllBookingsRoute && true;
  const isBookedSessionsOwnerAllBookingsRoute =
    path === bookedSessionsOwnerAllBookingsRoute && true;

  return (
    <Accordion className="table">
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={dispatchShowOppositeShowElement}
        >
          <div>{shouldShowElement ? "ok, close" : "show help"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>
        {shouldShowElement ? (
          <AccordionContent>
            {isBookedSessionsOwnerRoute ||
            isBookedSessionsUserRoute ||
            isBookedSessionUserAllBookingsRoute ||
            isBookedSessionsOwnerAllBookingsRoute ? (
              <RateLimitHelp />
            ) : null}

            <BlueH2>searching:</BlueH2>
            <Text>
              enter a search term in the search box to show only data that
              matches that search.
            </Text>
            <Text>
              you can search for anything that will have been entered into any
              of the yellow table headers.
            </Text>

            {isBookedSessionsOwnerRoute ||
            isBookedSessionsUserRoute ||
            isBookedSessionsUserAllBookingsRoute ||
            isIncomeRoute ? (
              <DateSearchingHelp />
            ) : null}

            {isBookedSessionsOwnerRoute ||
            isAllChildrenRoute ||
            isAllUsersRoute ? (
              <>
                <EmailAndCallTableHelp />
              </>
            ) : null}

            <BlackHr />

            <BlueH2>sorting:</BlueH2>
            <Text>
              you can sort the table into descending ( ⬇️ ), unsorted ( no arrow
              ) or ascending ( ⬆️ ) order by tapping on any of the yellow
              headers. The default sorted method is descending.
            </Text>

            {isBookedSessionsOwnerRoute ? (
              <IsBookedSessionsOwnerRouteTableHelp />
            ) : null}

            {isBookedSessionsUserRoute ||
            isBookedSessionsUserAllBookingsRoute ? (
              <>
                <BookedSessionsUserToggleBookings />
                <CancelBookingTableHelp />
                <DownloadPdfTableHelp />
              </>
            ) : null}

            {isBookedSessionsOwnerRoute ||
            isBookedSessionsUserRoute ||
            isBookedSessionsUserAllBookingsRoute ? (
              <ColourCodingTableHelp />
            ) : null}

            {isIncomeRoute ? <IncomeTableHelp /> : null}

            <BlackHr />
            <YellowGreenButton onClick={dispatchHideShownElement}>
              ok, close
            </YellowGreenButton>
          </AccordionContent>
        ) : null}
      </>
    </Accordion>
  );
};

export default TableHelp;
