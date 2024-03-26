import useGetAllChildrenSelectors from "../../hooks/get-selectors/use-get-all-children-selectors";
import useGetAllChildrenThunkUseEffect from "../../hooks/get-actions-and-thunks/get-all-children-actions-and-thunks/use-get-all-children-thunk-use-effect";

import Loader from "../../components/loader/loader.component";
import TableHelp from "../../components/tables/table-help.component";
import AllChildrenTable from "./all-children-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const AllChildrenInfo = () => {
  useGetAllChildrenThunkUseEffect();

  const { getAllChildrenIsLoading } = useGetAllChildrenSelectors();

  return (
    <Container>
      {getAllChildrenIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>children list</BlackTitle>
        <TableHelp />
      </ParentDiv>

      <AllChildrenTable />
    </Container>
  );
};

export default AllChildrenInfo;
