import useGetSessionPricesThunkUseEffect from "../../../hooks/get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-get-session-prices-thunk-use-effect";
import useUpdateSessionPriceResultSwal from "./hooks/use-update-session-price-result-swal";
import useDbManagementVariables from "../db-management-hooks/use-db-management-variables";

import ShowFetchErrors from "../../../components/errors/show-fetch-errors.component";
import Loader from "../../../components/loader/loader.component";
import UpdatePricesTitleAndAccordion from "./update-prices-title-and-accordion.component";
import UpdateMorningSessionPriceInfo from "./update-morning-session-price-info.component";
import UpdateMorningSessionPriceInput from "./update-morning-session-price-input.component";
import UpdateAfternoonShortSessionPriceInfo from "./update-afternoon-short-session-price-info.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Container } from "../../../styles/container/container.styles";

const DBManageViewSessionPrices = () => {
  useGetSessionPricesThunkUseEffect();
  useUpdateSessionPriceResultSwal();

  const {
    databaseManagementIsLoading,
    sessionTypesAndPricesIsLoading,
    sessionTypesAndPricesError,
  } = useDbManagementVariables();

  return (
    <Container>
      <UpdatePricesTitleAndAccordion />

      {sessionTypesAndPricesIsLoading || databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          {!sessionTypesAndPricesError ? (
            <>
              <ParentDiv>
                <UpdateMorningSessionPriceInfo />
                <UpdateMorningSessionPriceInput />
              </ParentDiv>

              <ParentDiv>
                <UpdateAfternoonShortSessionPriceInfo />
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

export default DBManageViewSessionPrices;
