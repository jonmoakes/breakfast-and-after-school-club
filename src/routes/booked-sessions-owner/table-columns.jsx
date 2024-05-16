import FormattedDateCell from "../../components/tables/formatted-date-cell.component";
import EmailCell from "../../components/tables/email-cell.component";
import PhoneNumberCell from "../../components/tables/phone-number-cell.component";

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
