import FormattedDateCell from "../../components/tables/formatted-date-cell.component";

import { getSessionTypeString } from "../../functions/get-session-type-string";

export const TABLE_COLUMNS = [
  {
    Header: "date",
    accessor: "dateAsDateObjectForSorting",
    Cell: ({ value }) => {
      return <FormattedDateCell {...{ value }} />;
    },
  },
  {
    Header: "session",
    accessor: "sessionType",
    Cell: ({ value }) => {
      const sessionType = value;
      return getSessionTypeString(sessionType);
    },
  },
  {
    Header: "children in booking",
    accessor: "childrensName",
  },
];
