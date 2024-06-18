import { EmergencyDetailsDiv } from "../../styles/div/div.styles";
import { EmergencyDetailsSpan } from "../../styles/span/span.styles";
import PhoneNumberCell from "./phone-number-cell.component";

const EmergencyContactsCell = ({ value }) => {
  const removePhoneNumber = (emergencyContactDetails) => {
    // Define the regex pattern for UK phone numbers
    const phonePattern = /\b0\d{10}\b/;

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

  const { phoneNumber, updatedString } = removePhoneNumber(value);

  return (
    <>
      {!value ? (
        "Not Provided"
      ) : value && phoneNumber ? (
        <EmergencyDetailsDiv>
          <>
            <PhoneNumberCell value={phoneNumber} />
            <EmergencyDetailsSpan>{updatedString}</EmergencyDetailsSpan>
          </>
        </EmergencyDetailsDiv>
      ) : (
        <span>{value}</span>
      )}
    </>
  );
};

export default EmergencyContactsCell;
