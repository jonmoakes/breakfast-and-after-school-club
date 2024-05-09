import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import useDbManageCancelBookingVariables from "./hooks/use-db-manage-cancel-booking-variables";

const CancelBookingInfoAccordion = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();
  const { userOfAppChoice } = useDbManageCancelBookingVariables();

  return (
    <>
      {!userOfAppChoice ? (
        <ParentDiv>
          <Accordion {...{ shouldShowElement }}>
            <>
              <AccordionTitle
                {...{ shouldShowElement }}
                onClick={dispatchShowOppositeShowElement}
              >
                <div>
                  {shouldShowElement ? "ok, close" : "cancel booking info"}
                </div>
                <>{shouldShowElement ? "-" : "+"}</>
              </AccordionTitle>

              {shouldShowElement && (
                <AccordionContent>
                  <Text>
                    on this page, you can manually cancel one of your bookings.
                  </Text>
                  <Text>
                    normally, this will be for one of your customers who doesn't
                    use the app.
                  </Text>
                  <Text>
                    there can be an occasion where you need to cancel a booking
                    for a customer who does use the app though.
                  </Text>
                  <Text>
                    For example, if a user keeps getting an error when they try
                    to cancel a booking.
                  </Text>
                  <Text>this situation should be extremely rare though!</Text>
                  <YellowGreenButton onClick={dispatchHideShownElement}>
                    Ok, Close
                  </YellowGreenButton>
                </AccordionContent>
              )}
            </>
          </Accordion>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default CancelBookingInfoAccordion;
