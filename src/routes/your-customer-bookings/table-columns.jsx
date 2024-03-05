import { StyledLink } from "../../styles/link/link.styles";

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
  {
    Header: "consents given",
    accessor: "consentChoiceForEachChildInBooking",
  },
  {
    Header: "parent name",
    accessor: "parentName",
  },
  {
    Header: "parent email",
    accessor: "parentEmail",
    Cell: ({ value }) => {
      const onEmailClick = () => {
        const subject = encodeURIComponent(
          "Message From Breakfast & After School Club"
        );
        window.open(`mailto:${value}?Subject=${subject}`);
      };
      return <StyledLink onClick={onEmailClick}>tap to email</StyledLink>;
    },
  },
  {
    Header: "Parent Phone",
    accessor: "parentPhoneNumber",
    Cell: ({ value }) => {
      return <a href={`tel:${value}`}>Tap to call</a>;
    },
  },
];
