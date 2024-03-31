import useBookedSessionsUserVariables from "./booked-sessions-user-hooks/use-booked-sessions-user-variables";

import TableHelp from "../../components/tables/table-help.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const BookedSessionsUserTitleAndHelp = () => {
  const { data, bookedSessionsUserShowAllDates } =
    useBookedSessionsUserVariables();

  return (
    <ParentDiv>
      <BlackTitle>
        {!bookedSessionsUserShowAllDates ? "upcoming " : "all "}booked sessions
      </BlackTitle>
      {data.length ? <TableHelp /> : null}
    </ParentDiv>
  );
};

export default BookedSessionsUserTitleAndHelp;
