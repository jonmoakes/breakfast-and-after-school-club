import { useSelector } from "react-redux";

import useSessionSpacesListener from "../../hooks/use-session-spaces-listener";
import useRequestDateData from "./book-a-session-hooks/use-request-date-data";
import useGetBookSessionResultSwal from "./book-a-session-hooks/swals/use-get-book-session-result-swal";

import { selectRequestDateDataIsLoading } from "../../store/request-date-data/request-date-data.selector";
import { selectBookSessionIsLoading } from "../../store/book-session/book-session.selector";

import Loader from "../../components/loader/loader.component";
import BalanceCheckAndBookSessionHelp from "./sections/balance-check-and-book-session-help.component";
import ChooseDate from "./sections/choose-date.component";

import ChooseSessions from "./sections/choose-sessions.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const BookASession = () => {
  useSessionSpacesListener();
  useRequestDateData();
  useGetBookSessionResultSwal();

  const requestDateDataIsLoading = useSelector(selectRequestDateDataIsLoading);
  const bookSessionIsLoading = useSelector(selectBookSessionIsLoading);

  return (
    <Container>
      {requestDateDataIsLoading || bookSessionIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>book a session</BlackTitle>
      </ParentDiv>

      <BalanceCheckAndBookSessionHelp />
      <ChooseDate />
      <ChooseSessions />
    </Container>
  );
};

export default BookASession;
