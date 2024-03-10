import EmailButtonWithTooltip from "../../components/email-button-with-tooltip/email-button-wth-tooltip.component";

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
      const sessiontype = value;
      return getSessionTypeString(sessiontype);
    },
  },
  {
    Header: "children in booking",
    accessor: "childrensName",
  },
  {
    Header: "parent name",
    accessor: "parentName",
  },
  {
    Header: `parent email
    ( tap to email )`,
    Cell: ({ row }) => {
      return <EmailButtonWithTooltip {...{ row }} />;
    },
  },
  {
    Header: `Parent Phone
    ( tap to call )`,
    accessor: "parentPhoneNumber",
    Cell: ({ value }) => {
      return <a href={`tel:${value}`}>{value}</a>;
    },
  },
];
