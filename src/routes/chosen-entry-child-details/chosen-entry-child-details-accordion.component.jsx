import { useSelector, useDispatch } from "react-redux";

import {
  toggleShowElement,
  selectShouldShowElementSelectors,
} from "../../store/should-show-element/should-show-element.slice";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const ChosenEntryChildDetailsAccordion = () => {
  const { shouldShowElement } = useSelector(selectShouldShowElementSelectors);

  const dispatch = useDispatch();

  return (
    <ParentDiv>
      <Accordion {...{ shouldShowElement }}>
        <>
          <AccordionTitle
            {...{ shouldShowElement }}
            onClick={() => dispatch(toggleShowElement())}
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
            </AccordionContent>
          )}
        </>
      </Accordion>
    </ParentDiv>
  );
};

export default ChosenEntryChildDetailsAccordion;
