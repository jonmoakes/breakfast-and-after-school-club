export const TABLE_COLUMNS = [
  {
    Header: "date",
    accessor: "formattedDate",
  },
  {
    Header: "session",
    accessor: "sessionType",
    Cell: ({ value }) => {
      const formattedSessionType = () => {
        switch (value) {
          case "afternoonShort":
            return "afternoon short";
          case "afternoonLong":
            return "afternoon long";
          case "morningAndAfternoonShort":
            return "morning and afternoon short";
          case "morningAndAfternoonLong":
            return "morning and afternoon long";
          default:
            return value;
        }
      };
      return formattedSessionType();
    },
  },
  {
    Header: "children in booking",
    accessor: "childrensName",
  },
];
