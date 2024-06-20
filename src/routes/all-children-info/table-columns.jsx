import { LowercasedSpan } from "../../styles/span/span.styles";

import EmailCell from "../../components/tables/email-cell.component";
import PhoneNumberCell from "../../components/tables/phone-number-cell.component";

export const TABLE_COLUMNS = [
  {
    Header: "child name",
    accessor: "childName",
  },
  {
    Header: "medical info",
    accessor: "medicalInfo",
  },
  {
    Header: "dietary requirements",
    accessor: "dietryRequirements",
  },
  {
    Header: "additional info",
    accessor: "additionalInfo",
  },
  {
    Header: "age",
    accessor: "age",
  },
  {
    Header: "consent choice",
    accessor: "consent",
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
    Header: "parent phone number",
    accessor: "parentPhoneNumber",
    Cell: ({ value }) => <PhoneNumberCell {...{ value }} />,
  },
  {
    Header: "parents user id",
    accessor: "parentsUserId",
    Cell: ({ value }) => {
      return <LowercasedSpan>{value}</LowercasedSpan>;
    },
  },
  {
    Header: "childs id",
    accessor: "$id",
    Cell: ({ value }) => {
      return <LowercasedSpan>{value}</LowercasedSpan>;
    },
  },
];
