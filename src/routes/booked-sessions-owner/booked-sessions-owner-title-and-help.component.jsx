import TableHelp from "../../components/tables/table-help.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import useBookedSessionsOwnerVariables from "./booked-sessions-owner-hooks/use-booked-sessions-owner-variables";

const BookedSessionsOwnerTitleAndHelp = () => {
  const { data, bookedSessionsOwnerShowAllDates } =
    useBookedSessionsOwnerVariables();

  return (
    <ParentDiv>
      <BlackTitle>
        {!bookedSessionsOwnerShowAllDates ? "todays " : "all "}booked sessions
      </BlackTitle>
      {data.length ? <TableHelp /> : null}
    </ParentDiv>
  );
};

export default BookedSessionsOwnerTitleAndHelp;
