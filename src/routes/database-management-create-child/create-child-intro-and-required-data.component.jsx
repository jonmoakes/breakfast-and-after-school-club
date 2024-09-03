import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import CreateChildRequiredData from "./create-child-required-data.component";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const CreateChildIntroAndRequiredData = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <ParentDiv>
      <Text>here, you can create a child in the database.</Text>
      <Text>
        <RedSpan>
          you should only need to do this if you have a customer who for
          whatever reason, does not want to use the app
        </RedSpan>{" "}
        ( as otherwise they can add their child themselves ).
      </Text>
      <Text>
        in order to have somewhere where you can view their childs details, we
        still need to add the child to the database.
      </Text>
      <Text>tap the button to below to see the data required.</Text>

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
                : "required data to create a child"}
            </div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement && (
            <AccordionContent>
              <Text>
                to create the child, we need the following data which you can
                enter into the form below:
              </Text>
              <Text>
                any inputs marked with a <RedSpan>*</RedSpan> are required.
              </Text>

              <CreateChildRequiredData />

              <YellowGreenButton onClick={dispatchHideShownElement}>
                Ok, Close
              </YellowGreenButton>
            </AccordionContent>
          )}
        </>
      </Accordion>
      <Text>
        please enter their details below and then tap the 'create child' button,
        which will appear when at least all fields marked with a{" "}
        <RedSpan>*</RedSpan> have been filled in.
      </Text>
    </ParentDiv>
  );
};

export default CreateChildIntroAndRequiredData;
