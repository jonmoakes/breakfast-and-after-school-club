import useFetchBookedSessionsOwnerThunkUseEffect from "../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-fetch-booked-sessions-owner-thunk-use-effect";
import useDbManageCancelBookingVariables from "./hooks/use-db-manage-cancel-booking-variables";

import useGetSessionPricesThunkUseEffect from "../../hooks/get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-get-session-prices-thunk-use-effect";
import useCancelBookingResultSwal from "./hooks/use-cancel-booking-result-swal";
import useGetBookedSessionsOwnerSelectors from "../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useGetSessionTypesAndPricesSelectors from "../../hooks/get-selectors/use-get-session-types-and-prices-selectors";

import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import CancelBookingIntro from "./cancel-booking-intro.component";
import MatchedSessionDetails from "./matched-session-details.component";
import GetBookingToCancelForm from "./get-booking-to-cancel-form.component";
import CancelBookingButtons from "./cancel-booking-buttons.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const DbManageCancelBooking = () => {
  useFetchBookedSessionsOwnerThunkUseEffect();
  useGetSessionPricesThunkUseEffect();
  useCancelBookingResultSwal();

  const { bookedSessionsOwnerError } = useGetBookedSessionsOwnerSelectors();
  const { sessionTypesAndPricesError } = useGetSessionTypesAndPricesSelectors();

  const { databaseManagementIsLoading, bookedSessionsOwnerIsLoading } =
    useDbManageCancelBookingVariables();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>cancel a booking</BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading || bookedSessionsOwnerIsLoading ? (
        <Loader />
      ) : bookedSessionsOwnerError || sessionTypesAndPricesError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <CancelBookingIntro />
          <GetBookingToCancelForm />
          <MatchedSessionDetails />
          <CancelBookingButtons />
        </>
      )}
    </Container>
  );
};
export default DbManageCancelBooking;
