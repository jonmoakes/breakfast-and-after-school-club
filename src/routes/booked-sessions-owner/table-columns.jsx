import FormattedDateCell from "../../components/tables/formatted-date-cell.component";
import UsersEmailCell from "../../components/tables/user-email-cell.component";
import UsersPhoneNumberCell from "../../components/tables/users-phone-number-cell.component";

import { InLineDiv } from "../../styles/div/div.styles";
import { LowercasedSpan, RightMarginSpan } from "../../styles/span/span.styles";

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
    Cell: ({ value }) => {
      return (
        <InLineDiv>
          <LowercasedSpan className="right-margin">{value}</LowercasedSpan>
          <UsersEmailCell {...{ value }} />
        </InLineDiv>
      );
    },
  },
  {
    Header: "Parent Phone",
    accessor: "parentPhoneNumber",
    Cell: ({ value }) => {
      return (
        <InLineDiv>
          <RightMarginSpan>{value}</RightMarginSpan>
          <UsersPhoneNumberCell {...{ value }} />
        </InLineDiv>
      );
    },
  },
];
