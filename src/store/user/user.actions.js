import { createAsyncThunk } from "@reduxjs/toolkit";
import { account, databases } from "../../utils/appwrite/appwrite-config";
import { ID, Query } from "appwrite";
import { setCurrentUser } from "./user.slice";

import {
  localhostSocialLoginResultRoute,
  socialLoginResultRoute,
} from "../../strings/strings";

const currentUser = (id, createdAt, name, email, walletBalance) => {
  return { id, createdAt, name, email, walletBalance };
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

      const { id, name, createdAt, walletBalance } =
        findCurrentUser.documents[0];

      return currentUser(id, createdAt, name, email, walletBalance);
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
      await account.createEmailSession(email, password);
      const user = await account.get();

      const createdUser = {
        id: user.$id,
        createdAt: user.$createdAt,
        name: user.name,
        email: user.email,
        walletBalance: 0,
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
      };

      if (total === 0) {
        await databases.createDocument(
          import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
          import.meta.env.VITE_USER_COLLECTION_ID,
          user.$id,
          createdUser
        );
      }

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

      if (!userId || !secret) return;

      await account.updateMagicURLSession(userId, secret);
      const user = await account.get();

      const createdUser = {
        id: user.$id,
        createdAt: user.$createdAt,
        name: user.name,
        email: user.email,
        walletBalance: 0,
      };

      const getUserDocumentsList = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        [Query.equal("id", user.$id)]
      );
      const { total } = getUserDocumentsList;

      if (total === 0) {
        await databases.createDocument(
          import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
          import.meta.env.VITE_USER_COLLECTION_ID,
          user.$id,
          createdUser
        );
      }

      return createdUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

      const { id, name, email, createdAt, walletBalance } =
        findCurrentUser.documents[0];

      return currentUser(id, createdAt, name, email, walletBalance);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
