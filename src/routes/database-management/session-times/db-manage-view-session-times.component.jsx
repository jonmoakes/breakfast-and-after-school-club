import useRequestSessionTimesThunkUseEffect from "../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-session-times-thunk-use-effect";
import useUpdateSessionTimeResultSwal from "./hooks/use-update-session-time-result-swal";
import useDbManagementVariables from "../db-management-hooks/use-db-management-variables";

import UpdateSessionTimesTitle from "./update-session-times-title.component";
import Loader from "../../../components/loader/loader.component";
import ShowFetchErrors from "../../../components/errors/show-fetch-errors.component";
import MorningSessionTimeInfo from "./morning-session-time-info.component";
import UpdateMorningSessionTimeInput from "./update-morning-session-time-input.component";
import AfternoonShortSessionTimeInfo from "./afternoon-short-session-time-info.component";
import UpdateAfternoonShortSessionTimeInput from "./update-afternoon-short-session-time-input.component";
import AfternoonLongSessionTimeInfo from "./afternoon-long-session-time-info.component";
import UpdateAfternoonLongSessionTimeInput from "./update-afternoon-long-session-time-input.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";

const DBManageViewSessionTimes = () => {
  useRequestSessionTimesThunkUseEffect();
  useUpdateSessionTimeResultSwal();

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
            <>
              <ParentDiv>
                <MorningSessionTimeInfo />
                <UpdateMorningSessionTimeInput />
              </ParentDiv>

              <ParentDiv>
                <AfternoonShortSessionTimeInfo />
                <UpdateAfternoonShortSessionTimeInput />
              </ParentDiv>

              <ParentDiv>
                <AfternoonLongSessionTimeInfo />
                <UpdateAfternoonLongSessionTimeInput />
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

export default DBManageViewSessionTimes;
