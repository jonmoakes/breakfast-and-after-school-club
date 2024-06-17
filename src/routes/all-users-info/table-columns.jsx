import FormattedDateCell from "../../components/tables/formatted-date-cell.component";
import PhoneNumberCell from "../../components/tables/phone-number-cell.component";
import EmailCell from "../../components/tables/email-cell.component";

import {
  EmergencyDetailsSpan,
  LowercasedSpan,
} from "../../styles/span/span.styles";
import { EmergencyDetailsDiv } from "../../styles/div/div.styles";

const removePhoneNumber = (emergencyContactDetails) => {
  // Define the regex pattern for UK phone numbers
  const phonePattern = /\b0\d{10}\b/;

  // Match the pattern in the input string
  const match = emergencyContactDetails.match(phonePattern);

  // If a match is found, remove it from the string and return both the phone number and the updated string
  if (match) {
    const phoneNumber = match[0];
    const updatedString = emergencyContactDetails
      .replace(phonePattern, "")
      .trim();
    return { phoneNumber, updatedString };
  }

  // If no match is found, return null for the phone number and the original string
  return { phoneNumber: null, updatedString: emergencyContactDetails };
};

export const TABLE_COLUMNS = [
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "email",
    accessor: "email",
    Cell: ({ value }) => <EmailCell {...{ value }} />,
  },
  {
    Header: "phone number",
    accessor: "phoneNumber",
    Cell: ({ value }) => <PhoneNumberCell {...{ value }} />,
  },
  {
    Header: "emergency contact details",
    accessor: "emergencyContactDetails",
    Cell: ({ value }) => {
      const { phoneNumber, updatedString } = removePhoneNumber(value);

      return (
        <EmergencyDetailsDiv>
          {phoneNumber ? (
            <PhoneNumberCell value={phoneNumber} />
          ) : (
            "None provided"
          )}
          <EmergencyDetailsSpan>{updatedString}</EmergencyDetailsSpan>
        </EmergencyDetailsDiv>
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
