import EmailButtonWithTooltip from "../../components/email-button-with-tooltip/email-button-wth-tooltip.component";

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
    Header: `parent email
    ( tap to email )`,
    Cell: ({ row }) => {
      return <EmailButtonWithTooltip {...{ row }} />;
    },
  },
  {
    Header: "consent choice",
    accessor: "consent",
  },
];
