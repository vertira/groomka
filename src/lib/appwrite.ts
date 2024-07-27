import { Client, Databases, Storage } from "appwrite";
export const client = new Client();
export const databases = new Databases(client);
export const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a375f50034196ca7a1");

