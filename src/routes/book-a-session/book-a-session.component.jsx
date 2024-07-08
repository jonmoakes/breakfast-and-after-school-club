import useGetBookSessionResultSwal from "./book-a-session-hooks/swals/use-get-book-session-result-swal";
import useIsOnline from "../../hooks/use-is-online";
import useSessionSpacesListener from "./book-a-session-hooks/use-session-spaces-listener";
import useGetUsersChildrenUserBookingsAndSessionPricesThunkUseEffect from "../../hooks/get-actions-and-thunks/book-session-actions-and-thunks/use-get-users-children-user-bookings-and-session-prices-thunk-use-effect";
import useErrorFetchingData from "./book-a-session-hooks/use-error-fetching-data";
import useConfirmMoveToRecurringSessionsRoute from "./book-a-session-hooks/swals/use-confirm-move-to-recurring-sessions-route";

import BookSessionLoaders from "./sections/book-session-loaders.component";
import NetworkError from "../../components/errors/network-error.component";
import BalanceCheckAndBookSessionHelp from "./sections/balance-check-and-book-session-help.component";
import ChooseDate from "./sections/choose-date.component";
import ChooseSessions from "./sections/choose-sessions.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

import {
  bookRecurringSessionsRoute,
  manageEmergencyContactsRoute,
} from "../../strings/routes/routes-strings";
import { Text } from "../../styles/p/p.styles";
import { MinimalButton } from "../../styles/buttons/buttons.styles";
import useSessionLogic from "./book-a-session-hooks/logic/use-session-logic";
import { StyledLink } from "../../styles/link/link.styles";
import AgreeToTerms from "./sections/agree-to-terms.component";

const BookASession = () => {
  useSessionSpacesListener();
  useGetUsersChildrenUserBookingsAndSessionPricesThunkUseEffect();
  useGetBookSessionResultSwal();
  const { emergencyContactDetails, emergencyContactDetailsTwo } =
    useSessionLogic();
  const { isOnline } = useIsOnline();
  const { errorFetchingData } = useErrorFetchingData();
  const { confirmMoveToRecurringSessionsRoute } =
    useConfirmMoveToRecurringSessionsRoute();

  const agreeChecked = localStorage.getItem("agreeChecked");

  return (
    <Container>
      <BookSessionLoaders />

      <ParentDiv>
        <BlackTitle>book a session</BlackTitle>
        {!emergencyContactDetails && !emergencyContactDetailsTwo ? (
          <Text>
            please{" "}
            <StyledLink to={manageEmergencyContactsRoute}>
              add at least one emergency contact
            </StyledLink>{" "}
            before booking a session.
          </Text>
        ) : (
          <>
            {agreeChecked ? (
              <>
                <Text>
                  if need to book recurring sessions, please tap the button
                  below.
                </Text>
                <MinimalButton
                  onClick={confirmMoveToRecurringSessionsRoute}
                  to={bookRecurringSessionsRoute}
                >
                  book recurring sessions
                </MinimalButton>
              </>
            ) : null}
          </>
        )}
      </ParentDiv>

      {!emergencyContactDetails && !emergencyContactDetailsTwo ? null : (
        <>
          {isOnline ? (
            <>
              {errorFetchingData() ? (
                <ShowFetchErrors />
              ) : (
                <>
                  <AgreeToTerms />
                  {agreeChecked ? (
                    <>
                      <BalanceCheckAndBookSessionHelp />
                      <ChooseDate />
                      <ChooseSessions />
                    </>
                  ) : null}
                </>
              )}
            </>
          ) : (
            <NetworkError />
          )}
        </>
      )}
    </Container>
  );
};

export default BookASession;
