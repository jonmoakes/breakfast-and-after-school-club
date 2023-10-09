import { format } from "date-fns";
import { EmailLink } from "../../styles/p/p.styles";
export const TABLE_COLUMNS = [
  {
    Header: "date",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd MMMM yyyy");
    },
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
  {
    Header: "parent email",
    accessor: "parentEmail",
    Cell: ({ value }) => {
      const onEmailClick = () => {
        window.open(
          `mailto:${value}?Subject=Message From Breakfast & After School Club`
        );
      };
      return <EmailLink onClick={onEmailClick}>{value}</EmailLink>;
    },
  },
  {
    Header: "parent name",
    accessor: "parentName",
  },
];
