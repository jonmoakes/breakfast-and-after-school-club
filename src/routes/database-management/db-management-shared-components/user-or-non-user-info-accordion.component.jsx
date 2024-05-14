import { useLocation } from "react-router-dom";

import useShouldShowElementActions from "../../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useGetShouldShowElementSelectors from "../../../hooks/get-selectors/use-get-should-show-element-selectors";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { databaseManagementAddBookingRoute } from "../../../strings/routes/routes-strings";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const UserOrNonUserInfoAccordion = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  const location = useLocation();
  const path = location.pathname;

  const isAddingBookingRoute = () => {
    return path === databaseManagementAddBookingRoute && true;
  };

  return (
    <>
      <BlackHr />
      <Accordion {...{ shouldShowElement }}>
        <>
          <AccordionTitle
            {...{ shouldShowElement }}
            onClick={dispatchShowOppositeShowElement}
          >
            <div>
              {shouldShowElement
                ? "ok, close"
                : "why do you need to know this?"}
            </div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement && (
            <AccordionContent>
              <BlueH2>why do you need to know this?</BlueH2>
              <BlackHr />
              <Text>in the database, the following will happen.</Text>
              <BlackHr />
              <Text>
                if they're <RedSpan>not</RedSpan> a user of the app, we will:
              </Text>
              <ul>
                <li>
                  {isAddingBookingRoute() ? "Deduct" : "Add"} session spaces.
                </li>
                <li>
                  {isAddingBookingRoute() ? "Add" : "Remove"} the booking data.
                </li>
              </ul>
              <BlackHr />
              <Text>
                if they <RedSpan>are</RedSpan> a user of the app, we will:
              </Text>
              <ul>
                <li>update the users balance.</li>
                <li>
                  {isAddingBookingRoute() ? "Deduct" : "Add"} session spaces.
                </li>
                <li>
                  {isAddingBookingRoute() ? "Add" : "Remove"} booking data.
                </li>
              </ul>
              <BlackHr />
              <YellowGreenButton onClick={dispatchHideShownElement}>
                Ok, Close
              </YellowGreenButton>
            </AccordionContent>
          )}
        </>
      </Accordion>
      <BlackHr />
    </>
  );
};

export default UserOrNonUserInfoAccordion;
