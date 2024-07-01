import useFetchIncomeDataThunkUseEffect from "../../hooks/get-actions-and-thunks/income-data-actions-and-thunks/use-fetch-income-data-thunk-use-effect";
import useGetIncomeDataSelectors from "../../hooks/get-selectors/use-get-income-data-selectors";

import IncomeHelpAccordion from "./income-help-accordion.component";
import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import IncomeTable from "./income-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const Income = () => {
  useFetchIncomeDataThunkUseEffect();
  const { incomeDataIsLoading, sortedIncomeData, incomeDataError } =
    useGetIncomeDataSelectors();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>income</BlackTitle>
        <IncomeHelpAccordion />
      </ParentDiv>

      {incomeDataIsLoading ? <Loader /> : null}
      {incomeDataError ? (
        <ShowFetchErrors />
      ) : sortedIncomeData && sortedIncomeData.length ? (
        <IncomeTable {...{ sortedIncomeData }} />
      ) : null}
    </Container>
  );
};

export default Income;
