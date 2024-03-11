import { getUserCollectionId } from "../school-codes-list/get-ids-from-school-code/get-user-collection-id";
import { manageDatabaseDocument } from "../utils/appwrite/appwrite-functions";

export const getParentsEmail = async (row) => {
  try {
    // parentsUerId is added when we add the sessionBookingData when a user makes a booking.
    // It is the same Id as the user who book the sessions currentUser.id
    // Therefore, we can use this to search in that particular users document and extract their email from it below.
    const { parentsUserId, $databaseId } = row.original;

    const databaseId = $databaseId;
    //App owner will be logged in, so they will have a school code. From this we can get their usersCollectionId.
    const collectionId = getUserCollectionId();
    const documentId = parentsUserId;

    const emailFromUserWhoBookedTheSession = await manageDatabaseDocument(
      "get",
      databaseId,
      collectionId,
      documentId
    ).then((rowData) => rowData.email);

    return emailFromUserWhoBookedTheSession;
  } catch (error) {
    const errorMessage = error.message || "Unknown error";

    alert(
      `Error Getting The Users Email. Please Try Again Or Contact Us If The Problem Persists. The Error Received Was: ${errorMessage.toUpperCase()}`
    );
  }
};
