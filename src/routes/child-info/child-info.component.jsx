import { useDispatch, useSelector } from "react-redux";

import { selectShouldShowElement } from "../../store/should-show-element/should-show-element.selector";
import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Container } from "../../styles/container/container.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { LowercasedSpan } from "../../styles/span/span.styles";

const ChildInfo = () => {
  const shouldShowElement = useSelector(selectShouldShowElement);
  const dispatch = useDispatch();
  return (
    <Container>
      <ParentDiv>
        <BlackTitle>child info</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Accordion {...{ shouldShowElement }}>
          <>
            <AccordionTitle
              {...{ shouldShowElement }}
              onClick={() => dispatch(toggleShowElement())}
            >
              <div>{shouldShowElement ? "ok, close" : "child info help"}</div>
              <>{shouldShowElement ? "-" : "+"}</>
            </AccordionTitle>

            {shouldShowElement && (
              <AccordionContent>
                <Text>
                  here, you can view or edit your child(
                  <LowercasedSpan>s</LowercasedSpan>) information.
                </Text>
                <Text>
                  tap the plus button in the top right corner to add a child.
                </Text>
                <Text>
                  tap the small square box to the left of your childs name, then
                  tap the 'edit child info' button to view or edit that
                  information.
                </Text>
                <YellowGreenButton onClick={() => dispatch(hideElement())}>
                  Ok, Close
                </YellowGreenButton>
              </AccordionContent>
            )}
          </>
        </Accordion>
      </ParentDiv>
    </Container>
  );
};

export default ChildInfo;
