import { Client, Account, Databases, Query } from "appwrite";
import { schoolCodesList } from "../../school-codes-list/school-codes-list";

export const client = new Client();
client.setEndpoint("https://appwrite.breakfast-and-after-school-club.co.uk/v1");

const schoolCode = localStorage.getItem("schoolCode");
const { cleveleysPrimary } = schoolCodesList;

switch (schoolCode) {
  case cleveleysPrimary:
    client.setProject(import.meta.env.VITE_CLEVELEYS_PRIMARY_PROJECT_ID);
    break;
  default:
    client.setProject(import.meta.env.VITE_TEST_SCHOOL_PROJECT_ID);
}

export const account = new Account(client);
export const databases = new Databases(client);
export const query = new Query(client);
