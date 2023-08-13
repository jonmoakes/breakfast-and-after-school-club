import { account, databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const getUserDocument = async () => {
  const user = await account.get();
  const session = await account.getSession("current");

  const userDocument = await databases.listDocuments(
    import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
    import.meta.env.VITE_USER_COLLECTION_ID,
    [Query.equal("id", user.$id)]
  );

  const { total, documents } = userDocument;
  return { user, session, total, documents };
};

export const getRetrievedUserFromDocument = async () => {
  const userDocument = await getUserDocument();
  const { total, documents } = userDocument;

  if (total && documents.length) {
    const { id, name, email, createdAt, walletBalance, provider } =
      documents[0];

    return {
      id,
      createdAt,
      name,
      email,
      walletBalance,
      provider,
    };
  } else {
    return null;
  }
};

export const createDocumentAndSetUser = async () => {
  const userDocument = await getUserDocument();
  const { user, session, total, documents } = userDocument;

  if (!total && !documents.length) {
    const createdUser = {
      id: user.$id,
      createdAt: user.$createdAt,
      name: user.name,
      email: user.email,
      walletBalance: 0,
      provider: session.provider,
    };

    await databases.createDocument(
      import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
      import.meta.env.VITE_USER_COLLECTION_ID,
      user.$id,
      createdUser
    );

    return createdUser;
  } else {
    return null;
  }
};
