import { account } from "./appwrite";

export const checkSession = async () => {
  try {
    const user = await account.get();
    console.log(user);
    return user;
  } catch (error) {
    console.log("Brak sesji");
    return null;
  }
};
export const logout = async () => {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.log("Error during logout", error);
    return false;
  }
};
