import { account } from "../../utils/appwrite/appwrite-config";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions/";
import { getSchoolDatabaseAndUserCollectionIds } from "../../functions/get-school-db-and-user-collection-ids";

export const getRetrievedUserFromDocument = async (schoolCode) => {
  const user = await account.get();
  const { databaseId, collectionId } =
    getSchoolDatabaseAndUserCollectionIds(schoolCode);

  const queryIndex = "$id";
  const queryValue = user.$id;

  const userDocument = await listDocumentsByQueryOrSearch(
    databaseId,
    collectionId,
    queryIndex,
    queryValue
  );

  // number of documents found in database and the document.
  //Should only be 1 as only 1 should match the user.$id
  const { total, documents } = userDocument;

  if (total && documents.length) {
    const { id, name, email, createdAt, walletBalance, provider, schoolCode } =
      documents[0];

    return {
      id,
      createdAt,
      name,
      email,
      walletBalance,
      provider,
      schoolCode,
    };
  } else {
    return null;
  }
};

export const createDocumentAndSetUser = async (schoolCode) => {
  const user = await account.get();
  const session = await account.getSession("current");
  const { databaseId, collectionId } =
    getSchoolDatabaseAndUserCollectionIds(schoolCode);

  const queryIndex = "$id";
  const queryValue = user.$id;
  const documentId = user.$id;

  const userDocument = await listDocumentsByQueryOrSearch(
    databaseId,
    collectionId,
    queryIndex,
    queryValue
  );

  const { total, documents } = userDocument;

  if (!total && !documents.length) {
    const dataToAdd = {
      id: user.$id,
      createdAt: user.$createdAt,
      name: user.name,
      email: user.email,
      walletBalance: 0,
      provider: session.provider,
      schoolCode,
    };

    await manageDatabaseDocument(
      "create",
      databaseId,
      collectionId,
      documentId,
      dataToAdd
    );

    return dataToAdd;
  } else {
    return null;
  }
};
