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
              <Text>in the database we will be:</Text>
              <Text>
                <BlackHr />
                if they're <RedSpan>not</RedSpan> a user of the app:
                <br />
                <ul>
                  <li>
                    {isAddingBookingRoute() ? "Adding" : "Remove"} the booking
                    data.
                  </li>

                  <li>
                    {isAddingBookingRoute() ? "Deducting" : "Adding"} session
                    spaces.
                  </li>
                </ul>{" "}
              </Text>
              <BlackHr />
              <Text>
                if they <RedSpan>are</RedSpan> a user of the app,
                <br />
                <ul>
                  <li>
                    {" "}
                    {isAddingBookingRoute() ? "Adding" : "Remove"} booking data.
                  </li>
                  <li>
                    {isAddingBookingRoute() ? "Deducting" : "Adding"} session
                    spaces.
                  </li>
                  <li>updating the users balance.</li>
                </ul>{" "}
                <BlackHr />
              </Text>
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
