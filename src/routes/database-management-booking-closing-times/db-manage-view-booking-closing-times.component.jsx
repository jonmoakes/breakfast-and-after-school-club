import useRequestBookingClosingTimesThunkUseEffect from "../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-booking-closing-times-thunk-use-effect";
import useUpdateBookingClosingTimeResultSwal from "./hooks/use-update-booking-closing-time-result-swal";
import useGetRequestDateDataSelectors from "../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import Loader from "../../components/loader/loader.component";
import UpdateBookingClosingTimesTitleAndAccordion from "./update-booking-closing-times-title-and-accordion.component";
import UpdateMorningSessionClosingTimesInfo from "./update-morning-session-closing-time-info.component";
import UpdateMorningSessionClosingTimeInput from "./update-morning-session-closing-time-input.component";
import UpdateAfternoonSessionClosingTimesInfo from "./update-afternoon-session-closing-time-info.component";
import UpdateAfternoonSessionClosingTimeInput from "./update-afternoon-session-closing-time-input.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Container } from "../../styles/container/container.styles";

const DBManageViewBookingClosingTimes = () => {
  useRequestBookingClosingTimesThunkUseEffect();
  useUpdateBookingClosingTimeResultSwal();

  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();
  const { requestDateDataIsLoading, requestDateDataError } =
    useGetRequestDateDataSelectors();

  return (
    <Container>
      <UpdateBookingClosingTimesTitleAndAccordion />

      {requestDateDataIsLoading || databaseManagementIsLoading ? (
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
                <UpdateAfternoonSessionClosingTimesInfo />
                <UpdateAfternoonSessionClosingTimeInput />
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
