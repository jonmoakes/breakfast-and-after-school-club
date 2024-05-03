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

const DeleteUserInstructions = () => {
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
              {shouldShowElement ? "ok, close" : "delete user instructions"}
            </div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement && (
            <AccordionContent>
              <Balancer>
                <Text>
                  please enter the first children id into the input below,{" "}
                  <RedSpan>Exactly</RedSpan> as it is in the email and then tap
                  'delete child document'
                </Text>

                <Text>
                  repeat this process for each users children id if there is
                  more than one.
                </Text>

                <BlackHr />

                <Text>
                  once you have deleted all of the children ids, tap on the
                  button that says 'continue' ( under the input ).
                </Text>
                <Text>
                  this will now replace the first form input with an input to
                  delete the user themselves.
                </Text>

                <BlackHr />
                <Text>
                  now enter in the users unique document id, which you will also
                  find in the email.
                </Text>
                <Text>
                  then tap on the 'delete user document' button and confirm.
                </Text>
                <Text>this will delete the user from the database.</Text>
                <BlackHr />
                <Text>
                  we recommend copy and pasting the values from the email so
                  that there are no errors.
                </Text>

                <BlackHr />

                <Text>
                  should you need to go back to deleting a users children
                  instead of the user, you can press the 'continue' button,
                  which will revert the form to delete a child instead of a
                  user.
                </Text>
                <BlackHr />
                <Text>
                  once you have completed these actions, please refer to the
                  email for the final step which is contacting jonathan and
                  giving him the users unique document id, so that he can remove
                  the authentication user from the databse.
                </Text>

                <BlackHr />
                <Text>
                  if you receive an error when trying to delete this user,
                  please contact jonathan.
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

export default DeleteUserInstructions;
