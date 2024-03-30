import { format, parseISO } from "date-fns";

import EmailIcon from "../../assets/email-icon.png";
import ShowCallIcon from "../../components/tables/show-call-icon.component";

import { IconImage } from "../../styles/image/image.styles";
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
      const subject = encodeURIComponent(
        "Message From Breakfast & After School Club"
      );

      const openEmail = () => {
        return (window.location.href = `mailto:${value}?Subject=${subject}`);
      };

      return (
        <InLineDiv>
          <LowercasedSpan className="right-margin">{value}</LowercasedSpan>
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
            <span>no number found</span>
          ) : (
            <>
              <RightMarginSpan>{value}</RightMarginSpan>
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

      return <span>{formattedCreatedOn}</span>;
    },
  },
];
