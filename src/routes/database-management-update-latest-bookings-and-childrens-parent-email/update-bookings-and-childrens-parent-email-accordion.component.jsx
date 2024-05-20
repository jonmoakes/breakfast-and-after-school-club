import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const UpdateBookingsAndChildrensParentEmailAccordion = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

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
                : "updating bookings and childrens list parent email info"}
            </div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement && (
            <AccordionContent>
              <Text>
                on this page, what has happened is that a user has updated their
                email address that they use to sign into the app.
              </Text>

              <Text>
                if you ever need to contact the user for any reason, you need to
                use this latest email address.
              </Text>

              <Text>
                places where you can contact the user directly, are in your
                bookings table and your childrens list table so these are the
                pleaces that we are going to update the email address.
              </Text>

              <Text>
                please note that the email will be updated automatically in your
                'users list' when the user changed their email.
              </Text>

              <Text>
                also, as mentioned in the email, only bookings from the current
                date onwards will have the parents email updated.
              </Text>
              <Text>
                this is because over time, the user may have hundreds of
                bookings.
              </Text>
              <Text>
                as well as being an expensive database operation to update all
                values, it is not necessary as you would only normally look at
                past bookings for other reasons - not contacting a user.
              </Text>
              <Text>
                if successful, the latest bookings and the childrens list parent
                email values will be updated in the database.
              </Text>
              <Text>
                if you receive an error after trying to do this, please contact
                jonathan.
              </Text>
              <YellowGreenButton onClick={dispatchHideShownElement}>
                Ok, Close
              </YellowGreenButton>
            </AccordionContent>
          )}
        </>
      </Accordion>{" "}
      <BlackHr />
    </>
  );
};

export default UpdateBookingsAndChildrensParentEmailAccordion;
