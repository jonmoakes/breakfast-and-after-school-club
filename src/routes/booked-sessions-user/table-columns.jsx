import { getSessionTypeString } from "../../functions/get-session-type-string";

export const TABLE_COLUMNS = [
  {
    Header: "date",
    accessor: "formattedDate",
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
