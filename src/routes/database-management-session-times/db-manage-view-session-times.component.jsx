import useRequestSessionTimesThunkUseEffect from "../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-session-times-thunk-use-effect";
import useUpdateSessionTimeResultSwal from "./hooks/use-update-session-time-result-swal";
import useGetRequestDateDataSelectors from "../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import UpdateSessionTimesTitleAndAccordion from "./update-session-times-title-and-accordion.component";
import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import MorningSessionTimeInfo from "./morning-session-time-info.component";
import UpdateMorningSessionTimeInput from "./update-morning-session-time-input.component";
import AfternoonShortSessionTimeInfo from "./afternoon-short-session-time-info.component";
import UpdateAfternoonShortSessionTimeInput from "./update-afternoon-short-session-time-input.component";
import AfternoonLongSessionTimeInfo from "./afternoon-long-session-time-info.component";
import UpdateAfternoonLongSessionTimeInput from "./update-afternoon-long-session-time-input.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import useSessionTimesVariables from "./hooks/use-session-times-variables";

const DBManageViewSessionTimes = () => {
  useRequestSessionTimesThunkUseEffect();
  useUpdateSessionTimeResultSwal();

  const { requestDateDataIsLoading, requestDateDataError } =
    useGetRequestDateDataSelectors();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();
  const { afternoonShortSessionTime } = useSessionTimesVariables();

  return (
    <Container>
      <UpdateSessionTimesTitleAndAccordion />

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

              {afternoonShortSessionTime ? (
                <ParentDiv>
                  <AfternoonShortSessionTimeInfo />
                  <UpdateAfternoonShortSessionTimeInput />
                </ParentDiv>
              ) : null}

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
