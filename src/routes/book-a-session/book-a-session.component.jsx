import useGetBookSessionResultSwal from "./book-a-session-hooks/swals/use-get-book-session-result-swal";
import useIsOnline from "../../hooks/use-is-online";
import useSessionSpacesListener from "./book-a-session-hooks/use-session-spaces-listener";
import useGetUsersChildrenAndConditionallyUserBookings from "../../hooks/use-get-users-children-and-conditionally-user-bookings";

import Loaders from "./sections/loaders.component";
import NetworkError from "../../components/errors/network-error.component";
import BalanceCheckAndBookSessionHelp from "./sections/balance-check-and-book-session-help.component";
import ChooseDate from "./sections/choose-date.component";
import ChooseSessions from "./sections/choose-sessions.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const BookASession = () => {
  useGetBookSessionResultSwal();
  useGetUsersChildrenAndConditionallyUserBookings();
  useSessionSpacesListener();

  const { isOnline } = useIsOnline();

  return (
    <Container>
      <Loaders />

      <ParentDiv>
        <BlackTitle>book a session</BlackTitle>
      </ParentDiv>

      {isOnline ? (
        <>
          <BalanceCheckAndBookSessionHelp />
          <ChooseDate />
          <ChooseSessions />
        </>
      ) : (
        <NetworkError />
      )}
    </Container>
  );
};

export default BookASession;
