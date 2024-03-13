import { useSelector } from "react-redux";

import useGetAllUsers from "./all-users-hooks/use-get-all-users";

import { selectGetAllUsersSelectors } from "../../store/get-all-users/get-all-users.slice";

import Loader from "../../components/loader/loader.component";
import TableHelp from "../../components/tables/table-help.component";
import AllUsersTable from "./all-users-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const AllUsersInfo = () => {
  useGetAllUsers();

  const { getAllUsersIsLoading } = useSelector(selectGetAllUsersSelectors);

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
