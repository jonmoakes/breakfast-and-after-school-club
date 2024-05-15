import Balancer from "react-wrap-balancer";

import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";

import {
  allChildrenRoute,
  contactRoute,
} from "../../strings/routes/routes-strings";

const DeleteChildInstructions = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <ParentDiv>
      <Accordion {...{ shouldShowElement }}>
        <>
          <AccordionTitle
            {...{ shouldShowElement }}
            onClick={dispatchShowOppositeShowElement}
          >
            <div>
              {shouldShowElement ? "ok, close" : "delete child instructions"}
            </div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement && (
            <AccordionContent>
              <Balancer>
                <BlueH2>where to find the child id:</BlueH2>
                <Text>
                  you will find the id in your{" "}
                  <StyledLink to={allChildrenRoute}>children list</StyledLink>{" "}
                  table, in the last row under the heading of 'childs id'.
                </Text>

                <BlackHr />

                <Text>
                  double check you are deleting the correct child ( easily done
                  if two children have the same name )!
                </Text>

                <Text>
                  you can double check the name of email address of the parent
                  to be sure ( also in the same table ).
                </Text>

                <Text>
                  please enter the child id into the input below,{" "}
                  <RedSpan>Exactly</RedSpan> as it is in the table and then tap
                  'delete child document'.
                </Text>

                <Text>
                  we recommend copy and pasting the value so that there are no
                  errors.
                </Text>

                <BlackHr />

                <Text>then tap on the 'delete child' button and confirm.</Text>
                <Text>this will delete the child from the database.</Text>
                <BlackHr />

                <Text>
                  if you receive an error when trying to delete this child, or
                  have any questions at all, please{" "}
                  <StyledLink to={contactRoute}>contact jonathan</StyledLink>.
                </Text>
              </Balancer>
              <YellowGreenButton onClick={dispatchHideShownElement}>
                Ok, Close
              </YellowGreenButton>
            </AccordionContent>
          )}
        </>
      </Accordion>
    </ParentDiv>
  );
};

export default DeleteChildInstructions;
