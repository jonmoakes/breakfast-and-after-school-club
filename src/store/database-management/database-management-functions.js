import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

// used twice in database management thunks so refactored here to one function.
export const updateWalletBalance = async (
  usersDocumentId,
  databaseId,
  userCollectionId,
  refundPrice
) => {
  const queryIndexUser = "$id";
  const queryValueUser = usersDocumentId;

  const getUsersDocument = await listDocumentsByQueryOrSearch(
    databaseId,
    userCollectionId,
    queryIndexUser,
    queryValueUser
  );

  const { documents, total } = getUsersDocument;

  if (!total) {
    throw new Error("document not found");
  }

  const { walletBalance } = documents[0];
  //db expects a double for its attribute
  const refundPriceAsDoubleInPence = parseFloat(refundPrice);
  const dataToUpdate = {
    walletBalance: walletBalance + refundPriceAsDoubleInPence,
  };
  await manageDatabaseDocument(
    "update",
    databaseId,
    userCollectionId,
    usersDocumentId,
    dataToUpdate
  );
};
