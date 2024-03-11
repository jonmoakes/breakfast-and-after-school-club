import { getParentsEmail } from "../../functions/get-parents-email";
import { TableEmailButton } from "../../styles/buttons/buttons.styles";

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
    Header: "consent choice",
    accessor: "consent",
  },
];
