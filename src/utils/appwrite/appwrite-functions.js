import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const listChildrenDocumentsWhereQueryIsParentEmail = async (
  databaseId,
  childrenCollectionId,
  email
) => {
  return await databases.listDocuments(databaseId, childrenCollectionId, [
    Query.equal("parentEmail", email),
  ]);
};

export const createDatabaseDocument = async (
  databaseId,
  collectionId,
  documentId,
  dataToAdd
) => {
  return await databases.createDocument(
    databaseId,
    collectionId,
    documentId,
    dataToAdd
  );
};
