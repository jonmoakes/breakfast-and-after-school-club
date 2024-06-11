import useBookedSessionsOwnerVariables from "./booked-sessions-owner-hooks/use-booked-sessions-owner-variables";

import TableHelp from "../../components/tables/table-help.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const BookedSessionsOwnerTitleAndHelp = () => {
  const { data, bookedSessionsOwnerShowAllDates } =
    useBookedSessionsOwnerVariables();

  return (
    <ParentDiv>
      <BlackTitle>
        {!bookedSessionsOwnerShowAllDates ? "todays " : "upcoming "}booked
        sessions
      </BlackTitle>

      {data.length ? <TableHelp /> : null}
    </ParentDiv>
  );
};

export default BookedSessionsOwnerTitleAndHelp;
