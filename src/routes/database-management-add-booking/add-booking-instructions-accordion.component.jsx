import useDbManageAddBookingVariables from "./hooks/use-db-manage-add-booking-variables";
import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import SuccessAndFailInfo from "./success-and-fail-info.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { RedText, Text } from "../../styles/p/p.styles";
import {
  BlueSpan,
  LowercasedSpan,
  RedSpan,
} from "../../styles/span/span.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { allUsersRoute } from "../../strings/routes/routes-strings";

const AddBookingInstructionsAccordion = () => {
  const { userOfAppChoice } = useDbManageAddBookingVariables();
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <>
      {userOfAppChoice ? (
        <ParentDiv>
          {!shouldShowElement ? (
            <Text>
              &darr; <RedSpan>please read!</RedSpan> &darr;
            </Text>
          ) : null}

          <Accordion className="small-top-margin" {...{ shouldShowElement }}>
            <>
              <AccordionTitle
                {...{ shouldShowElement }}
                onClick={dispatchShowOppositeShowElement}
              >
                <div>
                  {shouldShowElement
                    ? "ok, close"
                    : "data required important info"}
                </div>
                <>{shouldShowElement ? "-" : "+"}</>
              </AccordionTitle>

              {shouldShowElement && (
                <AccordionContent>
                  <Text>
                    to add a booking, You will need the following data:
                  </Text>
                  <BlackHr />
                  <Text>
                    <BlueSpan>the date of the booking:</BlueSpan>
                  </Text>
                  <Text>
                    ( must be in the format of <RedSpan>YYYY-MM-DD</RedSpan> )
                  </Text>
                  <Text>ie '2024-05-13' for the 13th May 2024</Text>
                  <BlackHr />

                  <Text>
                    <BlueSpan>the session type:</BlueSpan>
                  </Text>
                  <Text>
                    this must be EXACTLY one of the following ( note the 'camel
                    case' text, where the first letter is always lowercased,
                    then the first letter of the next word is capitalised' ):
                  </Text>
                  <ul>
                    <li>
                      <RedSpan className="no-format">morning</RedSpan>
                    </li>
                    <li>
                      <RedSpan className="no-format">afternoonShort</RedSpan>
                    </li>
                    <li>
                      <RedSpan className="no-format">afternoonLong</RedSpan>
                    </li>
                    <li>
                      <RedSpan className="no-format">
                        morningAndAfternoonShort
                      </RedSpan>
                    </li>
                    <li>
                      <RedSpan className="no-format">
                        morningAndAfternoonLong
                      </RedSpan>
                    </li>
                  </ul>
                  <BlackHr />

                  <Text>
                    <BlueSpan>the children in the booking:</BlueSpan>
                  </Text>
                  <RedText>very important!</RedText>
                  <Text>
                    type in the name of each child in the booking. Make sure
                    that the name is <RedSpan>lowercased</RedSpan> and the
                    spelling should perfectly match.
                  </Text>
                  <Text>
                    if it doesn't match, the app wont be able to find the child
                    in the database associated with the name that you have
                    entered.
                  </Text>

                  <Text>
                    if there is more than one child in the booking, separate
                    each name with a comma and a space, ie:
                    <br />
                    <RedSpan>
                      <LowercasedSpan>
                        childnameone, childnametwo
                      </LowercasedSpan>
                    </RedSpan>
                  </Text>
                  <Text>
                    if there is only one child, do not add the comma after the
                    name.
                  </Text>
                  <Text>
                    The comma is very important if there is more than one child
                    in the booking.
                  </Text>
                  <Text>
                    failure to separate child names with a comma would prevent
                    the correct number of sessions being deducted from the
                    database.
                  </Text>

                  <Text>
                    note again, that adding the comma is not necessary if there
                    is just one child in the booking.
                  </Text>

                  <BlackHr />

                  <Text>
                    <BlueSpan>the parent name:</BlueSpan>
                  </Text>
                  <Text>
                    this should be lowercased text ie:
                    <br />
                    <br />
                    <RedSpan>
                      <LowercasedSpan>joe bloggs</LowercasedSpan>
                    </RedSpan>
                    <br />
                    <br />
                    and perfectly match the spelling of the parent name.
                  </Text>

                  <BlackHr />

                  <Text>
                    <BlueSpan>the parents phone number:</BlueSpan>
                  </Text>

                  <BlackHr />

                  <Text>
                    <BlueSpan>the parents user id:</BlueSpan>
                  </Text>

                  <Text>
                    this should be a 20 character id that is lowercased and is a
                    comination of letters and numbers only.
                  </Text>

                  <BlackHr />

                  <Text>
                    <BlueSpan>the parents email:</BlueSpan>
                  </Text>

                  <BlackHr />

                  <Text>
                    you can find the information for the parent name, phone
                    number, user id and email in the 'users list' in the
                    navigation menu. you can also tap{" "}
                    <StyledLink to={allUsersRoute}>here</StyledLink> to view all
                    your users.
                  </Text>

                  <Text>
                    please make sure all text is lowercased for the user id and
                    email.
                  </Text>
                  <BlackHr />

                  <Text>
                    once you have entered in all of this information, tap on the
                    '<RedSpan>add booking</RedSpan>' button and then tap 'i'm
                    sure'.
                  </Text>
                  <BlackHr />

                  <Text>
                    <RedSpan>
                      consider having all the booking information to hand before
                      entering info in this page, as if you leave the page, the
                      data will be lost and you would have to input it again.
                    </RedSpan>
                  </Text>
                  <Text>
                    if you're on a browser page, as opposed to having the app
                    open in full screen, you could open a new tab on the users
                    page, whilst also staying on this one.
                  </Text>
                  <BlackHr />
                  <SuccessAndFailInfo />

                  <YellowGreenButton onClick={dispatchHideShownElement}>
                    Ok, Close
                  </YellowGreenButton>
                </AccordionContent>
              )}
            </>
          </Accordion>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AddBookingInstructionsAccordion;
