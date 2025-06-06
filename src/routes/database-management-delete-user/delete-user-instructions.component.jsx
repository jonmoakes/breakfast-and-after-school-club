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
import { BlueSpan, RedSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";
import {
  allChildrenRoute,
  allUsersRoute,
  contactRoute,
} from "../../strings/routes/routes-strings";

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
              <BlueH2>
                <Balancer>where to find the required data:</Balancer>
              </BlueH2>
              <Text>
                <Balancer>
                  you will find the data in the email ( if you received one for
                  the reason mentioned at the top of this page ),
                </Balancer>
              </Text>
              <Text>
                <Balancer>
                  or in your{" "}
                  <StyledLink to={allChildrenRoute}>children list</StyledLink>{" "}
                  and <StyledLink to={contactRoute}>users list</StyledLink> ( if
                  you want to delete a non user of the app ):
                </Balancer>
              </Text>
              <BlackHr />

              <BlueH2>
                <Balancer>
                  if you received an email requesting deletion of a user:
                </Balancer>
              </BlueH2>
              <Text>
                <Balancer>
                  please enter the first children id into the input below,{" "}
                  <RedSpan>Exactly</RedSpan> as it is in the email and then tap
                  'delete child document'
                </Balancer>
              </Text>

              <Text>
                <Balancer>
                  repeat this process for each users children id if there is
                  more than one.
                </Balancer>
              </Text>

              <Text>
                <Balancer>
                  if you have no children ids in your email, this means that the
                  user has deleted their child(ren) themselves and therefore,
                  you can skip this step and proceed to the step with the
                  heading:
                  <br />'
                  <BlueSpan>
                    <Balancer>
                      After Deleting All Of The Customers Children
                    </Balancer>
                  </BlueSpan>
                  '
                </Balancer>
              </Text>

              <BlackHr />

              <BlueH2>
                <Balancer>if you are deleting a non user of the app:</Balancer>
              </BlueH2>

              <Text>
                <Balancer>
                  find the children in your{" "}
                  <StyledLink to={allChildrenRoute}>children list</StyledLink>{" "}
                  whose <RedSpan>Parents user id</RedSpan> matches the{" "}
                  <RedSpan>User id</RedSpan> of the customer you want to delete.
                </Balancer>
              </Text>

              <Text>
                <Balancer>
                  please enter the first children id into the input below,{" "}
                  <RedSpan>Exactly</RedSpan> as it is in the table and then tap
                  'delete child document'.
                </Balancer>
              </Text>

              <Text>
                <Balancer>
                  repeat this step for each child with a 'parents user id' that
                  matches the 'user id' of the customer you want to delete.
                </Balancer>
              </Text>

              <BlackHr />

              <BlueH2>
                <Balancer>
                  after deleting all of the customers children:
                </Balancer>
              </BlueH2>

              <Text>
                <Balancer>
                  once you have deleted all of the children ids, tap on the
                  button that says 'continue' ( under the input ).
                </Balancer>
              </Text>
              <Text>
                <Balancer>
                  this will now replace the first form input with an input to
                  delete the user themselves.
                </Balancer>
              </Text>

              <BlackHr />
              <Text>
                <Balancer>
                  now enter in the users unique document id, which you will also
                  find in the email ( if a user of the app requested deletion of
                  their account ) or in the{" "}
                  <StyledLink to={allUsersRoute}>users list</StyledLink> if you
                  are deleting a customer who does not use the app personally.
                </Balancer>
              </Text>
              <Text>
                <Balancer>
                  then tap on the 'delete user document' button and confirm.
                </Balancer>
              </Text>
              <Text>
                <Balancer>
                  this will delete the user from the database.
                </Balancer>
              </Text>
              <BlackHr />
              <Text>
                <Balancer>
                  we recommend copy and pasting the values from the email so
                  that there are no errors.
                </Balancer>
              </Text>

              <BlackHr />

              <Text>
                <Balancer>
                  should you need to go back to deleting a users children
                  instead of the user, you can press the 'go back' button, which
                  will revert the form to delete a child instead of a user.
                </Balancer>
              </Text>
              <BlackHr />
              <BlueH2>
                <Balancer>
                  if you received an email requesting deletion of a user:
                </Balancer>
              </BlueH2>
              <Text>
                <Balancer>
                  once you have completed these actions, please refer to the
                  email for the final step which is contacting jonathan and
                  giving him the users unique document id, so that he can remove
                  the authentication user from the database.
                </Balancer>
              </Text>
              <Text>
                <Balancer>
                  this step is not necessary if you are deleting a customer who
                  does not use the app as they do not have an authentication
                  entry.
                </Balancer>
              </Text>

              <BlackHr />
              <Text>
                <Balancer>
                  if you receive an error when trying to delete this user, or
                  have any questions at all, please{" "}
                  <StyledLink to={contactRoute}>contact jonathan</StyledLink>.
                </Balancer>
              </Text>

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
