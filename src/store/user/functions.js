import { account, databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";
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

export const operateOnUserDocument = async (
  operation,
  databaseId,
  collectionId,
  userId,
  userData
) => {
  switch (operation) {
    case "list":
      return await databases.listDocuments(databaseId, collectionId, [
        Query.equal("id", userId),
      ]);
    case "create":
      return await databases.createDocument(
        databaseId,
        collectionId,
        userId,
        userData
      );
    case "update":
      return await databases.updateDocument(
        databaseId,
        collectionId,
        userId,
        userData
      );
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
};

export const getRetrievedUserFromDocument = async (schoolCode) => {
  const user = await account.get();
  const { databaseId, collectionId } = getSchoolConfig(schoolCode);

  const userDocument = await operateOnUserDocument(
    "list",
    databaseId,
    collectionId,
    user.$id
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

  const userDocument = await operateOnUserDocument(
    "list",
    databaseId,
    collectionId,
    user.$id
  );

  const { total, documents } = userDocument;

  if (!total && !documents.length) {
    const createdUser = {
      id: user.$id,
      createdAt: user.$createdAt,
      name: user.name,
      email: user.email,
      walletBalance: 0,
      provider: session.provider,
      schoolCode,
    };

    await operateOnUserDocument(
      "create",
      databaseId,
      collectionId,
      user.$id,
      createdUser
    );
    return createdUser;
  } else {
    return null;
  }
};

// for future refactoring - book session thunks etc
export const getUserDocument = async (schoolCode) => {
  const user = await account.get();
  const session = await account.getSession("current");

  const { databaseId, collectionId } = getSchoolConfig(schoolCode);
  const userDocument = await operateOnUserDocument(
    "list",
    databaseId,
    collectionId,
    user.$id
  );

  const { total, documents } = userDocument;

  return { user, session, total, documents };
};
