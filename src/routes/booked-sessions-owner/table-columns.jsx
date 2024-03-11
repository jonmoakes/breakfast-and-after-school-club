import { TableEmailButton } from "../../styles/buttons/buttons.styles";

import { getSessionTypeString } from "../../functions/get-session-type-string";
import { getParentsEmail } from "../../functions/get-parents-email";

export const TABLE_COLUMNS = [
  {
    Header: "date",
    accessor: "formattedDate",
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
    Cell: ({ row }) => {
      const subject = encodeURIComponent(
        "Message From Breakfast & After School Club"
      );

      const onEmailClick = async () => {
        const email = await getParentsEmail(row);
        if (!email) return;
        window.location.href = `mailto:${email}?Subject=${subject}`;
      };

      return (
        <TableEmailButton type="button" onClick={onEmailClick}>
          tap to email
        </TableEmailButton>
      );
    },
  },
  {
    Header: `Parent Phone
    ( tap to call )`,
    accessor: "parentPhoneNumber",
    Cell: ({ value }) => {
      return <a href={`tel:${value}`}>{value}</a>;
    },
  },
];
