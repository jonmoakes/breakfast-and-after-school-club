import { getFormattedSessionType } from "../../functions/get-formatted-session-type";

export const TABLE_COLUMNS = [
  {
    Header: "date",
    accessor: "formattedDate",
  },
  {
    Header: "session",
    accessor: "sessionType",
    Cell: ({ value }) => {
      return getFormattedSessionType(value);
    },
  },
  {
    Header: "children in booking",
    accessor: "childrensName",
  },
];
