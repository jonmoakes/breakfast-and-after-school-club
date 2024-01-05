import { Client, Account, Databases, Query } from "appwrite";
import { manorBeachCode } from "../../school-codes/school-codes";

export const client = new Client();

const schoolCode = localStorage.getItem("schoolCode");

switch (schoolCode) {
  case manorBeachCode:
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
