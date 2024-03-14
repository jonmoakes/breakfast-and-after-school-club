import { format, parseISO } from "date-fns";
import EmailIcon from "../../assets/email-icon.png";
import ShowCallIcon from "../../components/tables/show-call-icon.component";

import { IconImage } from "../../styles/image/image.styles";
import { Text } from "../../styles/p/p.styles";
import { InLineDiv } from "../../styles/div/div.styles";
import { LowercaseTooltip } from "../../styles/tooltip/tooltip.styles";

export const TABLE_COLUMNS = [
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "email",
    accessor: "email",
    Cell: ({ value }) => {
      const subject = encodeURIComponent(
        "Message From Breakfast & After School Club"
      );

      const truncateEmail = (value, maxLength = 10) => {
        return value.length > maxLength
          ? value.slice(0, maxLength) + "..."
          : value;
      };

      const openEmail = () => {
        return (window.location.href = `mailto:${value}?Subject=${subject}`);
      };

      return (
        <InLineDiv>
          <LowercaseTooltip id="email" />
          <Text
            data-tooltip-id="email"
            data-tooltip-content={value}
            className="right-margin lowercased"
          >
            {truncateEmail(value)}
          </Text>
          <IconImage className="email" src={EmailIcon} onClick={openEmail} />
        </InLineDiv>
      );
    },
  },
  {
    Header: "phone number",
    accessor: "phoneNumber",
    Cell: ({ value }) => {
      const callNumber = `tel:${value}`;
      return (
        <InLineDiv>
          {!value ? (
            <Text>no number found</Text>
          ) : (
            <>
              <Text className="right-margin">{value}</Text>
              <ShowCallIcon {...{ callNumber }} />
            </>
          )}
        </InLineDiv>
      );
    },
  },
  {
    Header: "Signed Up Via",
    accessor: "provider",
  },
  {
    Header: "User Id",
    accessor: "id",
  },
  {
    Header: "joined On",
    accessor: "createdAt",
    Cell: ({ value }) => {
      const formattedCreatedOn = format(
        parseISO(value),
        "EEEE dd MMMM yyyy 'at' HH:mm"
      );

      return <Text>{formattedCreatedOn}</Text>;
    },
  },
];
