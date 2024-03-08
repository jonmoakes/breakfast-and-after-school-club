import { Client, Account, Databases, Query } from "appwrite";
import { setProjectId } from "../../school-codes-list/get-ids-from-school-code/set-project-id";

export const client = new Client();
client.setEndpoint("https://appwrite.breakfast-and-after-school-club.co.uk/v1");
setProjectId();

export const account = new Account(client);
export const databases = new Databases(client);
export const query = new Query(client);
