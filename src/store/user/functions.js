import { account, databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";
import { manorBeachCode } from "../../school-codes/school-codes";

const listUserDocuments = async (databaseId, userCollectionId, userId) => {
  return await databases.listDocuments(databaseId, userCollectionId, [
    Query.equal("id", userId),
  ]);
};

const createDocument = async (
  databaseId,
  userCollectionId,
  userId,
  userData
) => {
  await databases.createDocument(
    databaseId,
    userCollectionId,
    userId,
    userData
  );
};

export const getUserDocument = async (schoolCode) => {
  const user = await account.get();
  const session = await account.getSession("current");

  let userDocument;

  switch (schoolCode) {
    case manorBeachCode:
      userDocument = await listUserDocuments(
        import.meta.env.VITE_MANOR_BEACH_DATABASE_ID,
        import.meta.env.VITE_MANOR_BEACH_USER_COLLECTION_ID,
        user.$id
      );
      break;
    default:
      userDocument = await listUserDocuments(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
        user.$id
      );
  }

  const { total, documents } = userDocument;

  return { user, session, total, documents };
};

export const getRetrievedUserFromDocument = async (schoolCode) => {
  const user = await account.get();

  let userDocument;

  switch (schoolCode) {
    case manorBeachCode:
      userDocument = await listUserDocuments(
        import.meta.env.VITE_MANOR_BEACH_DATABASE_ID,
        import.meta.env.VITE_MANOR_BEACH_USER_COLLECTION_ID,
        user.$id
      );
      break;
    default:
      userDocument = await listUserDocuments(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
        user.$id
      );
  }

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

  let userDocument;

  switch (schoolCode) {
    case manorBeachCode:
      userDocument = await listUserDocuments(
        import.meta.env.VITE_MANOR_BEACH_DATABASE_ID,
        import.meta.env.VITE_MANOR_BEACH_USER_COLLECTION_ID,
        user.$id
      );
      break;
    default:
      userDocument = await listUserDocuments(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
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

        switch (schoolCode) {
          case manorBeachCode:
            await createDocument(
              import.meta.env.VITE_MANOR_BEACH_DATABASE_ID,
              import.meta.env.VITE_MANOR_BEACH_USER_COLLECTION_ID,
              user.$id,
              createdUser
            );
            break;
          default:
            await createDocument(
              import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
              import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
              user.$id,
              createdUser
            );
        }

        return createdUser;
      } else {
        return null;
      }
  }
};
