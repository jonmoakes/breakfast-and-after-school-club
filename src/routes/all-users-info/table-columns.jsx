import FormattedDateCell from "../../components/tables/formatted-date-cell.component";
import UsersEmailCell from "../../components/tables/user-email-cell.component";
import UsersPhoneNumberCell from "../../components/tables/users-phone-number-cell.component";

import { InLineDiv } from "../../styles/div/div.styles";
import { LowercasedSpan, RightMarginSpan } from "../../styles/span/span.styles";

export const TABLE_COLUMNS = [
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "email",
    accessor: "email",
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
    Header: "phone number",
    accessor: "phoneNumber",
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
