import FormattedDateCell from "./formatted-date-cell.component";
import EmailCell from "./email-cell.component";
import PhoneNumberCell from "./phone-number-cell.component";
import SignInRegistrationButtonCell from "./sign-in-out-registration/sign-in-registration/sign-in-registration-button-cell.component";
import SignOutRegistrationButtonCell from "./sign-in-out-registration/sign-out-registration/sign-out-registration-button-cell.component";

import { getSessionTypeString } from "../../functions/get-session-type-string";

export const BOOKED_SESSIONS_OWNER_TABLE_COLUMNS = [
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
    Header: "Signed In?",
    accessor: "signIn",
    Cell: ({ row, value }) => {
      return <SignInRegistrationButtonCell {...{ row, value }} />;
    },
  },
  {
    Header: "Signed Out?",
    accessor: "signedOut",
    Cell: ({ row, value }) => {
      return <SignOutRegistrationButtonCell {...{ row, value }} />;
    },
  },
  {
    Header: "parent name",
    accessor: "parentName",
  },
  {
    Header: "parent email",
    accessor: "parentEmail",
    Cell: ({ value }) => <EmailCell {...{ value }} />,
  },
  {
    Header: "Parent Phone",
    accessor: "parentPhoneNumber",
    Cell: ({ value }) => <PhoneNumberCell {...{ value }} />,
  },
  {
    Header: "booking id",
    accessor: "$id",
  },
];
