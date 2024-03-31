import FormattedDateCell from "../../components/tables/formatted-date-cell.component";
import UsersPhoneNumberCell from "../../components/tables/users-phone-number-cell.component";
import UsersEmailCell from "../../components/tables/user-email-cell.component";

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
    Header: "parent email",
    Cell: ({ row }) => {
      return <UsersEmailCell {...{ row }} />;
    },
  },
  {
    Header: "Parent Phone",
    accessor: "parentPhoneNumber",
    Cell: ({ value, row }) => {
      return <UsersPhoneNumberCell {...{ value, row }} />;
    },
  },
];
