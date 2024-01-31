import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { ErrorDiv, WarningDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { contactRoute } from "../../../strings/strings";
import { RedSpan } from "../../../styles/span/span.styles";

const DateErrors = () => {
  const {
    dateUnavailable,
    dateChosenInThePast,
    dateHasEarlyFinishTime,
    requestDateErrorMessage,
  } = useConditionalLogic();

  return (
    <>
      {dateUnavailable() ? (
        <>
          {requestDateErrorMessage !== "is not available" ? (
            <ErrorDiv>
              <Text>
                sorry, we received an error when trying to fetch your requested
                date. the error received was:
              </Text>
              <Text>
                <RedSpan>{requestDateErrorMessage}</RedSpan>
              </Text>
              <Text>
                please try again and{" "}
                <StyledLink to={contactRoute}>contact us</StyledLink> if the
                problem persists.
              </Text>
            </ErrorDiv>
          ) : (
            <WarningDiv>
              <Text>sorry, there are no sessions available for this day.</Text>
            </WarningDiv>
          )}
        </>
      ) : dateChosenInThePast() ? (
        <WarningDiv>
          <Text>
            you have chosen a date that is in the past. please select another
            date.
          </Text>
        </WarningDiv>
      ) : dateHasEarlyFinishTime() ? (
        <WarningDiv>
          <Text>
            please note, we close at {dateHasEarlyFinishTime()} on this date
            which is why no afternoon sessions are available.
          </Text>
        </WarningDiv>
      ) : null}
    </>
  );
};

export default DateErrors;
