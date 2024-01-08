import { account } from "../../utils/appwrite/appwrite-config";
import {
  listDocumentsByQuery,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions/";
import { schoolCodesList } from "../../school-codes-list/school-codes-list";

const { manorBeach } = schoolCodesList;

export const getSchoolConfig = (schoolCode) => {
  switch (schoolCode) {
    case manorBeach:
      return {
        databaseId: import.meta.env.VITE_MANOR_BEACH_DATABASE_ID,
        collectionId: import.meta.env.VITE_MANOR_BEACH_USER_COLLECTION_ID,
      };
    default:
      return {
        databaseId: import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        collectionId: import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
      };
  }
};

export const getRetrievedUserFromDocument = async (schoolCode) => {
  const user = await account.get();
  const { databaseId, collectionId } = getSchoolConfig(schoolCode);

  const queryIndex = "$id";
  const queryValue = user.$id;

  const userDocument = await listDocumentsByQuery(
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
  const { databaseId, collectionId } = getSchoolConfig(schoolCode);

  const queryIndex = "$id";
  const queryValue = user.$id;
  const documentId = user.$id;

  const userDocument = await listDocumentsByQuery(
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

// for future refactoring - book session thunks etc
export const getUserDocument = async (schoolCode) => {
  const user = await account.get();
  const session = await account.getSession("current");

  const queryIndex = "$id";
  const queryValue = user.$id;

  const { databaseId, collectionId } = getSchoolConfig(schoolCode);
  const userDocument = await listDocumentsByQuery(
    databaseId,
    collectionId,
    queryIndex,
    queryValue
  );

  const { total, documents } = userDocument;

  return { user, session, total, documents };
};
