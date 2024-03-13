import UsersPhoneNumberCell from "../../components/tables/users-phone-number-cell.component";
import UsersEmailCell from "../../components/tables/user-email-cell.component";

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
    Header: "dietry requirements",
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
