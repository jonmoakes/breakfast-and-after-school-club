import { useEffect, useState } from "react";

import { TableEmailButton } from "../../styles/buttons/buttons.styles";

import { getUsersEmailOnClick } from "../../functions/get-users-email-on-click";
import { LowercaseTooltip } from "../../styles/tooltip/tooltip.styles";

const EmailButtonWithTooltip = ({ row }) => {
  const [text, setText] = useState("");

  const truncateString = (text, maxLength = 10) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const onEmailClick = async () => {
    const subject = encodeURIComponent(
      "Message From Breakfast & After School Club"
    );

    const email = await getUsersEmailOnClick(row);
    if (!email) return;
    window.location.href = `mailto:${email}?Subject=${subject}`;
  };

  useEffect(() => {
    const getEmail = async () => {
      const email = await getUsersEmailOnClick(row);
      setText(email);
    };

    getEmail();
  }, [row]);

  return (
    <>
      <LowercaseTooltip id="email" />

      <TableEmailButton
        data-tooltip-id="email"
        data-tooltip-content={text}
        type="button"
        onClick={onEmailClick}
      >
        {text ? truncateString(text) : "...Loading"}
      </TableEmailButton>
    </>
  );
};

export default EmailButtonWithTooltip;
