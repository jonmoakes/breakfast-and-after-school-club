import { createAsyncThunk } from "@reduxjs/toolkit";
import { account, databases } from "../../utils/appwrite/appwrite-config";
import { ID, Query } from "appwrite";
import { setCurrentUser } from "./user.slice";

import {
  localhostSocialLoginResultRoute,
  socialLoginResultRoute,
} from "../../strings/strings";

const currentUser = (id, createdAt, name, email, walletBalance, provider) => {
  return { id, createdAt, name, email, walletBalance, provider };
};

export const signInAsync = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      await account.createEmailSession(email, password);
      const user = await account.get();

      const findCurrentUser = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        [Query.equal("id", user.$id)]
      );

      const { id, name, createdAt, walletBalance, provider } =
        findCurrentUser.documents[0];

      return currentUser(id, createdAt, name, email, walletBalance, provider);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "user/signUp",
  async ({ email, password, name }, thunkAPI) => {
    try {
      await account.create(ID.unique(), email, password, name);
      const session = await account.createEmailSession(email, password);
      const user = await account.get();

      const createdUser = {
        id: user.$id,
        createdAt: user.$createdAt,
        name: user.name,
        email: user.email,
        walletBalance: 0,
        provider: session.provider,
      };

      await databases.createDocument(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        user.$id,
        createdUser
      );

      return createdUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestFacebookSignInAsync = createAsyncThunk(
  "user/facebookSignIn",
  async (_, thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        await account.createOAuth2Session(
          "facebook",
          localhostSocialLoginResultRoute,
          localhostSocialLoginResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createOAuth2Session(
          "facebook",
          `https://breakfast-and-after-school-club.netlify.app${socialLoginResultRoute}`,
          `https://breakfast-and-after-school-club.netlify.app${socialLoginResultRoute}`
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestGoogleSignInAsync = createAsyncThunk(
  "user/googleSignIn",
  async (_, thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        await account.createOAuth2Session(
          "google",
          localhostSocialLoginResultRoute,
          localhostSocialLoginResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createOAuth2Session(
          "google",
          `https://breakfast-and-after-school-club.netlify.app${socialLoginResultRoute}`,
          `https://breakfast-and-after-school-club.netlify.app${socialLoginResultRoute}`
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInWithSocialAsync = createAsyncThunk(
  "user/signInWithSocial",
  async (_, thunkAPI) => {
    try {
      const user = await account.get();
      const session = await account.getSession("current");

      const getUserDocumentsList = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        [Query.equal("id", user.$id)]
      );
      const { total } = getUserDocumentsList;

      const createdUser = {
        id: user.$id,
        createdAt: user.$createdAt,
        name: user.name,
        email: user.email,
        walletBalance: 0,
        provider: session.provider,
      };

      if (total) return;

      await databases.createDocument(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        user.$id,
        createdUser
      );

      setCurrentUser(createdUser);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInMagicUrlAsync = createAsyncThunk(
  "user/signInWithMagicUrl",
  async (_, thunkAPI) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("userId");
      const secret = urlParams.get("secret");

      const session = await account.updateMagicURLSession(userId, secret);
      const user = await account.get();

      const createdUser = {
        id: user.$id,
        createdAt: user.$createdAt,
        name: user.name,
        email: user.email,
        walletBalance: 0,
        provider: session.provider,
      };

      const getUserDocumentsList = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        [Query.equal("id", user.$id)]
      );
      const { total } = getUserDocumentsList;

      if (total) return;

      await databases.createDocument(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        user.$id,
        createdUser
      );

      return createdUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Cannot destructure property 'id' of 'findCurrentUser.documents[0]' as it is undefined.

export const getUserOnLoadAsync = createAsyncThunk(
  "user/getUserOnLoad",
  async (_, thunkAPI) => {
    try {
      const user = await account.get();

      const findCurrentUser = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        [Query.equal("id", user.$id)]
      );

      if (!findCurrentUser.total) return;

      const { id, name, email, createdAt, walletBalance, provider } =
        findCurrentUser.documents[0];

      return currentUser(id, createdAt, name, email, walletBalance, provider);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOutAsync = createAsyncThunk(
  "user/signOut",
  async (_, thunkAPI) => {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
