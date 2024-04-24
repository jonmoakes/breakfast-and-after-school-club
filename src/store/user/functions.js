import { account } from "../../utils/appwrite/appwrite-config";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions/";
import { getSchoolDatabaseAndUserCollectionId } from "../../school-codes-list/get-ids-from-school-code/get-school-database-and-user-collection-id";
import { setEnvironmentVariables } from "../../school-codes-list/get-ids-from-school-code/set-environment-variables";

export const getRetrievedUserFromDocument = async (schoolCode) => {
  const user = await account.get();

  const { databaseId, collectionId } =
    getSchoolDatabaseAndUserCollectionId(schoolCode);

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
    const {
      id,
      name,
      email,
      phoneNumber,
      createdAt,
      walletBalance,
      schoolCode,
    } = documents[0];

    return {
      id,
      createdAt,
      name,
      email,
      phoneNumber,
      walletBalance,
      schoolCode,
    };
  } else {
    return;
  }
};

export const createDocumentAndSetUser = async (schoolCode, phoneNumber) => {
  const user = await account.get();

  const { databaseId, collectionId } =
    getSchoolDatabaseAndUserCollectionId(schoolCode);

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
      name: user.name.toLowerCase(),
      email: user.email,
      phoneNumber,
      walletBalance: 0,
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

export const getSchoolCodeAndSetEnvVariables = (state) => {
  const schoolCode = localStorage.getItem("schoolCode");
  state.currentUserEnvironmentVariables = setEnvironmentVariables(schoolCode);
};
