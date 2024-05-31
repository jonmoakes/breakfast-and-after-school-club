import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const ChosenEntryChildDetailsAccordion = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement } = useShouldShowElementActions();

  return (
    <ParentDiv>
      <Accordion {...{ shouldShowElement }}>
        <>
          <AccordionTitle
            {...{ shouldShowElement }}
            onClick={dispatchShowOppositeShowElement}
          >
            <div>{shouldShowElement ? "ok, close" : "child details help"}</div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement && (
            <AccordionContent>
              <Text>
                these details are what parents have entered for their child.
              </Text>
              <Text>
                note that as only the name, age and consent choice are required,
                medical info, dietry requirements and additional info may not be
                visible if the parent has not entered anything for those fields
                when creating the child.
              </Text>
              <Text>
                if the user has deleted their child from the database after they
                made their booking, The information will not show up here.
              </Text>
            </AccordionContent>
          )}
        </>
      </Accordion>
    </ParentDiv>
  );
};

export default ChosenEntryChildDetailsAccordion;
