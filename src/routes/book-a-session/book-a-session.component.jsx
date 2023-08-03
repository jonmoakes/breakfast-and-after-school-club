import { useSelector } from "react-redux";

import useRequestDateData from "./book-a-session-hooks/use-request-date-data";
import useRequestDateDataErrorSwal from "./book-a-session-hooks/use-request-date-data-error-swal";

import { selectRequestDateDataIsLoading } from "../../store/request-date-data/request-date-data.selector";

import Loader from "../../components/loader/loader.component";
import Info from "./info.component";
import ChooseDate from "./sections/choose-date.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import SpacesAvailable from "./sections/spaces-available.component";

const BookASession = () => {
  useRequestDateData();
  useRequestDateDataErrorSwal();

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
    </Container>
  );
};

export default BookASession;
