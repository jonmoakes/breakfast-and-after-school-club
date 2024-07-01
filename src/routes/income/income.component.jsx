import useFetchIncomeDataThunkUseEffect from "../../hooks/get-actions-and-thunks/income-data-actions-and-thunks/use-fetch-income-data-thunk-use-effect";
import useGetIncomeDataSelectors from "../../hooks/get-selectors/use-get-income-data-selectors";

import TableHelp from "../../components/tables/table-help.component";
import Loader from "../../components/loader/loader.component";
import IncomeTable from "./income-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

const Income = () => {
  useFetchIncomeDataThunkUseEffect();
  const { incomeDataIsLoading } = useGetIncomeDataSelectors();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>your income</BlackTitle>
        <Text>
          on this page, you can view a list of all received income from users of
          the app.
        </Text>
        <TableHelp />
      </ParentDiv>

      {incomeDataIsLoading ? <Loader /> : null}
      <IncomeTable />
    </Container>
  );
};

export default Income;
