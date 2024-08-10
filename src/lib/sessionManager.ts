import { account } from "./appwrite";

export const checkSession = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    console.log("No active session");
    return null;
  }
};
export const logout = async () => {
    try {
      await account.deleteSession('current');
      return true;
    } catch (error) {
      console.log("Error during logout", error);
      return false;
    }
  };