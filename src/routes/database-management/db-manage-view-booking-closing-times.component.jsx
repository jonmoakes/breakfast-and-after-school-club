import Balancer from "react-wrap-balancer";

import useRequestBookingClosingTimesThunkUseEffect from "../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-booking-closing-times-thunk-use-effect";
import useGetRequestDateDataSelectors from "../../hooks/get-selectors/use-get-request-date-data-selectors";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { Container } from "../../styles/container/container.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const DBManageViewBookingClosingTimes = () => {
  useRequestBookingClosingTimesThunkUseEffect();
  const {
    bookingClosingTimes,
    requestDateDataError,
    requestDateDataIsLoading,
  } = useGetRequestDateDataSelectors();

  const { morningSessionClosingTime, afternoonSessionClosingTime } =
    bookingClosingTimes || {};

  return (
    <Container>
      <ParentDiv>
        <Balancer>
          <BlackTitle>booking closing times from your database:</BlackTitle>
        </Balancer>
      </ParentDiv>
      {requestDateDataIsLoading ? (
        <Loader />
      ) : (
        <>
          {!requestDateDataError ? (
            <ParentDiv>
              <Balancer>
                <Text>
                  the latest time a user can book or cancel a morning session
                  is:
                  <br />
                  <RedSpan>{morningSessionClosingTime} AM</RedSpan>
                </Text>
              </Balancer>
              <Balancer>
                <Text>
                  the latest time a user can book or cancel an afternoon session
                  is:
                  <br />
                  <RedSpan>{afternoonSessionClosingTime} PM</RedSpan>
                </Text>
              </Balancer>
            </ParentDiv>
          ) : (
            <ShowFetchErrors />
          )}
        </>
      )}
    </Container>
  );
};

export default DBManageViewBookingClosingTimes;
