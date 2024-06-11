import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const AppOwnerBookingsChoiceInfoAccordion = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement } = useShouldShowElementActions();
  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={dispatchShowOppositeShowElement}
        >
          <div>
            {shouldShowElement
              ? "ok, close"
              : "which bookings button to choose?"}
          </div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <BlueH2>customer bookings:</BlueH2>
            <Text>
              this is the option you would normally want to choose when viewing
              your bookings, as it only shows bookings from the current date
              onwards.
            </Text>
            <BlackHr />
            <BlueH2>view all bookings:</BlueH2>
            <Text>
              this will show you every session ever booked which over time will
              become a very large amount and will take longer to load.
            </Text>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default AppOwnerBookingsChoiceInfoAccordion;
