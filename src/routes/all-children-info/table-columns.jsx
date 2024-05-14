import UsersPhoneNumberCell from "../../components/tables/users-phone-number-cell.component";
import UsersEmailCell from "../../components/tables/user-email-cell.component";

import { InLineDiv } from "../../styles/div/div.styles";
import { LowercasedSpan, RightMarginSpan } from "../../styles/span/span.styles";

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
    Header: "parent phone number",
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
  {
    Header: "parents user id",
    accessor: "parentsUserId",
  },
];
