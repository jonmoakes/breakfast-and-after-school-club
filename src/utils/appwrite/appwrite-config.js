import { Client, Account, Databases, Query } from "appwrite";
import { schoolCodesList } from "../../school-codes-list/school-codes-list";

export const client = new Client();

const schoolCode = localStorage.getItem("schoolCode");
const { manorBeach } = schoolCodesList;

switch (schoolCode) {
  case manorBeach:
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(import.meta.env.VITE_MANOR_BEACH_PROJECT_ID);
    break;
  default:
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(import.meta.env.VITE_TEST_SCHOOL_PROJECT_ID);
}

export const account = new Account(client);
export const databases = new Databases(client);
export const query = new Query(client);
