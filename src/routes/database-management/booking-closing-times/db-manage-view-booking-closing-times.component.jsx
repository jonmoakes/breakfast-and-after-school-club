import Balancer from "react-wrap-balancer";

import useRequestBookingClosingTimesThunkUseEffect from "../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-booking-closing-times-thunk-use-effect";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";

import ShowFetchErrors from "../../../components/errors/show-fetch-errors.component";
import Loader from "../../../components/loader/loader.component";
import UpdateBookingClosingTimesTitle from "./update-booking-closing-times-title.component";
import UpdateMorningSessionClosingTimesInfo from "./update-morning-session-closing-time-info.component";
import UpdateMorningSessionClosingTimeInput from "./update-morning-session-closing-time-input.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { Container } from "../../../styles/container/container.styles";

const DBManageViewBookingClosingTimes = () => {
  useRequestBookingClosingTimesThunkUseEffect();
  const {
    bookingClosingTimes,
    requestDateDataError,
    requestDateDataIsLoading,
  } = useGetRequestDateDataSelectors();

  const { afternoonSessionClosingTime } = bookingClosingTimes || {};

  return (
    <Container>
      <UpdateBookingClosingTimesTitle />

      {requestDateDataIsLoading ? (
        <Loader />
      ) : (
        <>
          {!requestDateDataError ? (
            <>
              <ParentDiv>
                <UpdateMorningSessionClosingTimesInfo />
                <UpdateMorningSessionClosingTimeInput />
              </ParentDiv>

              <ParentDiv>
                <Balancer>
                  <Text>
                    the latest time a user can book or cancel an afternoon
                    session is:
                    <br />
                    <RedSpan>{afternoonSessionClosingTime} PM</RedSpan>
                  </Text>
                </Balancer>
              </ParentDiv>
            </>
          ) : (
            <ShowFetchErrors />
          )}
        </>
      )}
    </Container>
  );
};

export default DBManageViewBookingClosingTimes;
