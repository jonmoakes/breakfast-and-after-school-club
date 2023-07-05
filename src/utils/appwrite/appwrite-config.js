import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a3db423003aa2834a5");

export const account = new Account(client);

//Database
export const databases = new Databases(client, "64a52fd28e490e5c092d");
