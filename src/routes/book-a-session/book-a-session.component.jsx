import { useSelector } from "react-redux";

import useSessionSpacesListener from "../../hooks/use-session-spaces-listener";
import useRequestDateData from "./book-a-session-hooks/use-request-date-data";

import {
  selectRequestDateDataIsLoading,
  selectRequestDateData,
} from "../../store/request-date-data/request-date-data.selector";

import Loader from "../../components/loader/loader.component";
import Info from "./sections/info.component";
import ChooseDate from "./sections/choose-date.component";
import SpacesAvailable from "./sections/spaces-available.component";
import SessionTimesAndPrices from "./sections/session-times-and-prices.component";
import ChooseSessions from "./sections/choose-sessions.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const BookASession = () => {
  useSessionSpacesListener();
  useRequestDateData();

  const requestDateData = useSelector(selectRequestDateData);
  const requestDateDataIsLoading = useSelector(selectRequestDateDataIsLoading);

  return (
    <Container>
      {requestDateDataIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>book a session</BlackTitle>
      </ParentDiv>

      <Info />
      <ParentDiv>
        <ChooseDate />
        <SpacesAvailable />
      </ParentDiv>

      {requestDateData ? (
        <ParentDiv>
          <BlueH2>choose sessions:</BlueH2>
          <SessionTimesAndPrices />
          <ChooseSessions />
        </ParentDiv>
      ) : null}
    </Container>
  );
};

export default BookASession;
