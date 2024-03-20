import UsersPhoneNumberCell from "../../components/tables/users-phone-number-cell.component";
import UsersEmailCell from "../../components/tables/user-email-cell.component";

import { getSessionTypeString } from "../../functions/get-session-type-string";
// import { Text } from "../../styles/p/p.styles";
// import BookedSessionsSignInCheckboxCell from "./booked-sessions-sign-in-checkbox-cell.component";

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
  // {
  //   Header: "signed in?",
  //   Cell: ({ row }) => {
  //     return <BookedSessionsSignInCheckboxCell {...{ row }} />;
  //   },
  // },
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
