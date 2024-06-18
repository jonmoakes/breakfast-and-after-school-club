import FormattedDateCell from "../../components/tables/formatted-date-cell.component";
import PhoneNumberCell from "../../components/tables/phone-number-cell.component";
import EmailCell from "../../components/tables/email-cell.component";
import EmergencyContactsCell from "../../components/tables/emergency-contacts-cell.component";

import { LowercasedSpan } from "../../styles/span/span.styles";

export const TABLE_COLUMNS = [
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "email",
    accessor: "email",
    Cell: ({ value }) => <EmailCell {...{ value }} />,
  },
  {
    Header: "phone number",
    accessor: "phoneNumber",
    Cell: ({ value }) => <PhoneNumberCell {...{ value }} />,
  },
  {
    Header: "emergency contact person",
    accessor: "emergencyContactDetails",
    Cell: ({ value }) => {
      return <EmergencyContactsCell {...{ value }} />;
    },
  },
  {
    Header: "emergency contact Person 2",
    accessor: "emergencyContactDetailsTwo",
    Cell: ({ value }) => {
      return <EmergencyContactsCell {...{ value }} />;
    },
  },
  {
    Header: "current wallet balance",
    accessor: "walletBalance",
    Cell: ({ value }) => {
      const amountToFixed = (value / 100).toFixed(2);
      return <>{value === null ? "N / A" : `£${amountToFixed}`}</>;
    },
  },

  {
    Header: "User Id",
    accessor: "id",
    Cell: ({ value }) => {
      return <LowercasedSpan>{value}</LowercasedSpan>;
    },
  },
  {
    Header: "created On",
    accessor: "createdAtDateObjectForSorting",
    Cell: ({ value }) => {
      return <FormattedDateCell {...{ value }} />;
    },
  },
];
