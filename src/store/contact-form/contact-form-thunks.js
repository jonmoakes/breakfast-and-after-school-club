import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SEND_CONTACT_FORM_MESSAGE_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const sendContactFormMessageAsync = createAsyncThunk(
  "contactForm",
  async (
    { currentUserEmail, appOwnerEmail, name, email, message },
    thunkAPI
  ) => {
    try {
      const getEmailToSendMessageTo = () => {
        let emailToSendMessageTo;

        if (currentUserEmail === appOwnerEmail || appOwnerEmail === undefined) {
          emailToSendMessageTo = import.meta.env.VITE_APP_ADMIN_EMAIL;
        } else {
          emailToSendMessageTo = appOwnerEmail;
        }
        return emailToSendMessageTo;
      };

      const sendTo = getEmailToSendMessageTo();

      const response = await axios.post(SEND_CONTACT_FORM_MESSAGE_ENDPOINT, {
        sendTo,
        name,
        email,
        message,
      });

      const { status } = response;
      return status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
