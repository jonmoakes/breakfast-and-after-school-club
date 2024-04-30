import useGetSessionPricesThunkUseEffect from "../../hooks/get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-get-session-prices-thunk-use-effect";
import useUpdateSessionPriceResultSwal from "./hooks/use-update-session-price-result-swal";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import Loader from "../../components/loader/loader.component";
import UpdatePricesTitleAndAccordion from "./update-prices-title-and-accordion.component";
import UpdateMorningSessionPriceInfo from "./update-morning-session-price-info.component";
import UpdateMorningSessionPriceInput from "./update-morning-session-price-input.component";
import UpdateAfternoonShortSessionPriceInfo from "./update-afternoon-short-session-price-info.component";
import UpdateAfternoonShortSessionPriceInput from "./update-afternoon-short-session-price-input.component";
import UpdateAfternoonLongSessionPriceInfo from "./update-afternoon-long-session-price-info.component";
import UpdateAfternoonLongSessionPriceInput from "./update-afternoon-long-session-price-input.component";
import UpdateMorningAndAfternoonShortSessionPriceInfo from "./update-morning-and-afternoon-short-session-price-info.component";
import UpdateMorningAndAfternoonShortSessionPriceInput from "./update-morning-and-afternoon-short-session-price-input.component";
import UpdateMorningAndAfternoonLongSessionPriceInfo from "./update-morning-and-afternoon-long-session-price-info.component";
import UpdateMorningAndAfternoonLongSessionPriceInput from "./update-morning-and-afternoon-long-session-price-input.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Container } from "../../styles/container/container.styles";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useGetSessionTypesAndPricesSelectors from "../../hooks/get-selectors/use-get-session-types-and-prices-selectors";

const DBManageViewSessionPrices = () => {
  useGetSessionPricesThunkUseEffect();
  useUpdateSessionPriceResultSwal();

  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();
  const { sessionTypesAndPricesIsLoading, sessionTypesAndPricesError } =
    useGetSessionTypesAndPricesSelectors();
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
                <UpdateAfternoonShortSessionPriceInput />
              </ParentDiv>

              <ParentDiv>
                <UpdateAfternoonLongSessionPriceInfo />
                <UpdateAfternoonLongSessionPriceInput />
              </ParentDiv>

              <ParentDiv>
                <UpdateMorningAndAfternoonShortSessionPriceInfo />
                <UpdateMorningAndAfternoonShortSessionPriceInput />
              </ParentDiv>

              <ParentDiv>
                <UpdateMorningAndAfternoonLongSessionPriceInfo />
                <UpdateMorningAndAfternoonLongSessionPriceInput />
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
