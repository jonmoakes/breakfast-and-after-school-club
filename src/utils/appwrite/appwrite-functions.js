import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const listDocumentsByQuery = async (
  databaseId,
  collectionId,
  queryIndex,
  queryValue
) => {
  const query = [Query.equal(queryIndex, queryValue)];
  return await databases.listDocuments(databaseId, collectionId, query);
};

export const manageDatabaseDocument = async (
  type,
  databaseId,
  collectionId,
  documentId,
  data
) => {
  switch (type) {
    case "create":
      return await databases.createDocument(
        databaseId,
        collectionId,
        documentId,
        data
      );
    case "update":
      return await databases.updateDocument(
        databaseId,
        collectionId,
        documentId,
        data
      );
    case "delete":
      return await databases.deleteDocument(
        databaseId,
        collectionId,
        documentId,
        data
      );
    case "get":
      return await databases.getDocument(databaseId, collectionId, documentId);
    default:
      throw new Error(`Unsupported operation: ${type}`);
  }
};
