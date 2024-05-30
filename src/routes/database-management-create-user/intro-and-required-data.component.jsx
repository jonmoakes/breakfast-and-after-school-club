import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";

import CreateUserRequiredData from "./create-user-required-data.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../styles/div/div.styles";
import { RedText, Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { contactRoute } from "../../strings/routes/routes-strings";

const CreateUserIntroAndRequiredData = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <ParentDiv>
      <Text>here, you can create a user in the database.</Text>
      <RedText>
        you should only need to do this if you have a customer who for whatever
        reason, does not want to use the app.
      </RedText>
      <Text>
        in order to add or cancel their bookings and update the session spaces
        correctly, we still need a user in the database, even though they wont
        be using the app themselves.
      </Text>
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
                : "more info about the created user"}
            </div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement && (
            <AccordionContent>
              <Text>
                please note that this newly created user won't be able to sign
                into the app or book sessions by themselves.
              </Text>
              <Text>
                it is simply to allow us to manage the database correctly so
                that you can see all your bookings in one place, rather than
                having a separate system for users and non users of the app.
              </Text>
              <Text>
                should the user ever decide that they do want to use the app,
                please{" "}
                <StyledLink to={contactRoute}>contact jonathan</StyledLink> so
                he can create an authenticated user that will allow them to sign
                in and use the app as normal.
              </Text>

              <YellowGreenButton onClick={dispatchHideShownElement}>
                Ok, Close
              </YellowGreenButton>
            </AccordionContent>
          )}
        </>
      </Accordion>

      <BlackHr />
      <Text>
        to create the user, we need the following data which you can enter into
        the form below:
      </Text>

      <CreateUserRequiredData />

      <Text>
        please enter their details below and then tap the 'create user' button,
        which will appear when all fields have been filled in.
      </Text>
    </ParentDiv>
  );
};

export default CreateUserIntroAndRequiredData;
