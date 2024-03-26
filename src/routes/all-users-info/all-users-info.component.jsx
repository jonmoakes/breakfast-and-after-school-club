import useGetAllUsersSelectors from "../../hooks/get-selectors/use-get-all-users-selectors";
import useGetAllUsersThunkUseEffect from "../../hooks/get-actions-and-thunks/get-all-users-actions-and-thunks/use-get-all-users-thunk-use-effect";

import Loader from "../../components/loader/loader.component";
import TableHelp from "../../components/tables/table-help.component";
import AllUsersTable from "./all-users-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const AllUsersInfo = () => {
  useGetAllUsersThunkUseEffect();
  const { getAllUsersIsLoading } = useGetAllUsersSelectors();

  return (
    <Container>
      {getAllUsersIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>users list</BlackTitle>
        <TableHelp />
      </ParentDiv>

      <AllUsersTable />
    </Container>
  );
};

export default AllUsersInfo;
