import useRequestSessionTimesThunkUseEffect from "../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-session-times-thunk-use-effect";
import useUpdateBookingClosingTimeResultSwal from "./hooks/use-update-session-times-result-swal";
import useDbManagementVariables from "../db-management-hooks/use-db-management-variables";

import UpdateSessionTimesTitle from "./update-session-times-title.component";
import Loader from "../../../components/loader/loader.component";
import ShowFetchErrors from "../../../components/errors/show-fetch-errors.component";
import MorningSessionTimeInfo from "./morning-session-time-info.component";
import UpdateMorningSessionTimeInput from "./update-morning-session-time-input.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";

const DBManageViewSessionTimes = () => {
  useRequestSessionTimesThunkUseEffect();
  useUpdateBookingClosingTimeResultSwal();

  const {
    requestDateDataIsLoading,
    databaseManagementIsLoading,
    requestDateDataError,
  } = useDbManagementVariables();

  return (
    <Container>
      <UpdateSessionTimesTitle />

      {requestDateDataIsLoading || databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          {!requestDateDataError ? (
            <ParentDiv>
              <MorningSessionTimeInfo />
              <UpdateMorningSessionTimeInput />
            </ParentDiv>
          ) : (
            <ShowFetchErrors />
          )}
        </>
      )}
    </Container>
  );
};

export default DBManageViewSessionTimes;
