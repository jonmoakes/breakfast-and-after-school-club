import { getUserCollectionId } from "../school-codes-list/get-ids-from-school-code/get-user-collection-id";
import { manageDatabaseDocument } from "../utils/appwrite/appwrite-functions";

const getUserPhoneOrEmail = async (row, propertyToExtract) => {
  // parentsUserId is added when we add the sessionBookingData when a user makes a booking.
  // It is the same Id as the user who book the sessions currentUser.id
  // Therefore, we can use this to search in that particular users document and extract their email

  const { parentsUserId, $databaseId } = row.original;

  const databaseId = $databaseId;
  //App user will be logged in, so they will have a school code. From this we can get their usersCollectionId.
  const collectionId = getUserCollectionId();
  const documentId = parentsUserId;

  const userInfoFromUserWhoBookedTheSession = await manageDatabaseDocument(
    "get",
    databaseId,
    collectionId,
    documentId
  ).then((rowData) => rowData[propertyToExtract]);

  return userInfoFromUserWhoBookedTheSession;
};

export const getParentsPhoneNumber = async (row) => {
  return getUserPhoneOrEmail(row, "phoneNumber");
};

export const getParentsEmail = async (row) => {
  return getUserPhoneOrEmail(row, "email");
};
