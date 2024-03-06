import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { getUserCollectionId } from "../../school-codes-list/get-ids-from-school-code/get-user-collection-id";

import { TableEmailButton } from "../../styles/buttons/buttons.styles";

const getUsersEmail = async (row) => {
  try {
    const { userId, $databaseId } = row.original;
    // UserId is added when we add the sessionBookingData when a user makes a booking.
    // It is the same Id as the user who book the sessions currentUser.id
    // Therefore, we can use this to search in that particular users document and extract their email from it below.

    const databaseId = $databaseId;
    //App owner will be logged in, so they will have a school code. From this we can get their usersCollectionId.
    const collectionId = getUserCollectionId();
    const documentId = userId;

    const emailFromUserWhoBookedTheSession = await manageDatabaseDocument(
      "get",
      databaseId,
      collectionId,
      documentId
    ).then((rowData) => rowData.email);

    return emailFromUserWhoBookedTheSession;
  } catch (error) {
    alert(
      `Error Getting The Users Email. Please Try Again Or Contact Us If The Problem Persists. The Error Received Was ${error}`
    );
    return null;
  }
};

export const TABLE_COLUMNS = [
  {
    Header: "date",
    accessor: "formattedDate",
  },
  {
    Header: "session",
    accessor: "sessionType",
    Cell: ({ value }) => {
      const formattedSessionType = () => {
        switch (value) {
          case "afternoonShort":
            return "afternoon short";
          case "afternoonLong":
            return "afternoon long";
          case "morningAndAfternoonShort":
            return "morning and afternoon short";
          case "morningAndAfternoonLong":
            return "morning and afternoon long";
          default:
            return value;
        }
      };
      return formattedSessionType();
    },
  },
  {
    Header: "children in booking",
    accessor: "childrensName",
  },
  {
    Header: "consents given",
    accessor: "consentChoiceForEachChildInBooking",
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
        const email = await getUsersEmail(row);
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
    Header: "Parent Phone",
    accessor: "parentPhoneNumber",
    Cell: ({ value }) => {
      return <a href={`tel:${value}`}>Tap to call</a>;
    },
  },
];
