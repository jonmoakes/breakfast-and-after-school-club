import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

// used twice in database management thunks so refactored here to one function.
export const updateWalletBalance = async (
  usersDocumentId,
  databaseId,
  userCollectionId,
  sessionPrice,
  operation
) => {
  const queryIndexUser = "id";
  const queryValueUser = usersDocumentId;

  const getUsersDocument = await listDocumentsByQueryOrSearch(
    databaseId,
    userCollectionId,
    queryIndexUser,
    queryValueUser,
    false,
    null
  );

  const { documents, total } = getUsersDocument;

  if (!total) {
    throw new Error("document not found");
  }

  const { walletBalance } = documents[0];
  //db expects a double for its attribute
  const priceAsDoubleInPence = parseFloat(sessionPrice);
  const dataToUpdate = {
    walletBalance:
      operation === "add"
        ? walletBalance + priceAsDoubleInPence
        : operation === "deduct" && walletBalance - priceAsDoubleInPence,
  };
  await manageDatabaseDocument(
    "update",
    databaseId,
    userCollectionId,
    usersDocumentId,
    dataToUpdate
  );
};
