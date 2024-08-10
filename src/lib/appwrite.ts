import { Account, Client, Databases, Storage } from "appwrite";
export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a375f50034196ca7a1");
export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);