import { createAsyncThunk } from "@reduxjs/toolkit";
import { ID } from "appwrite";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

import { bookRecurringSessionsRoute } from "../../strings/routes/routes-strings";
import { recurringBookingslastMinuteNoSessionsMessage } from "../../strings/errors/errors-strings";
import { createChildrenToAddToBooking } from "../../functions/create-children-to-add-to-booking";

export const updateRecurringSessionSpacesDocAsync = createAsyncThunk(
  "updateRecurringSessionSpacesDoc",
  async (
    {
      bookingsToAdd,
      databaseId,
      termDatesCollectionId,
      route,
      sessionChoice,
      numberOfChildrenInBooking,
      operation,
    },
    thunkAPI
  ) => {
    try {
      if (!Array.isArray(bookingsToAdd) || !bookingsToAdd.length) {
        throw new Error("No bookings provided");
      }
      // Fetch all date documents upfront
      const bookingDates = bookingsToAdd.map((booking) => booking.date);
      const getDateDocumentsToUpdate = await Promise.all(
        bookingDates.map((date) =>
          listDocumentsByQueryOrSearch(
            databaseId,
            termDatesCollectionId,
            "date",
            date,
            false,
            25
          )
        )
      );

      //convert to a single array of objects.
      const dateDocuments = getDateDocumentsToUpdate.flatMap(
        (result) => result.documents
      );

      // Check if any of the documents have zero session spaces for the given session type
      for (const booking of bookingsToAdd) {
        const dateDocument = dateDocuments.find(
          (doc) => doc.date === booking.date
        );

        if (!dateDocument) {
          throw new Error(`Date document not found for date: ${booking.date}`);
        }

        const { morningSessionSpaces, afternoonSessionSpaces } = dateDocument;

        if (
          route === bookRecurringSessionsRoute &&
          operation === "deduct" &&
          ((sessionChoice === "morning" && !morningSessionSpaces) ||
            (sessionChoice === "afternoonShort" && !afternoonSessionSpaces) ||
            (sessionChoice === "afternoonLong" && !afternoonSessionSpaces) ||
            (sessionChoice === "morningAndAfternoonShort" &&
              (!morningSessionSpaces || !afternoonSessionSpaces)) ||
            (sessionChoice === "morningAndAfternoonLong" &&
              (!morningSessionSpaces || !afternoonSessionSpaces)))
        ) {
          throw new Error(recurringBookingslastMinuteNoSessionsMessage);
        }
      }

      //  Loop through each booking and update the session spaces
      for (const booking of bookingsToAdd) {
        const { date } = booking;

        const numberOfChildrenAsNumber =
          typeof numberOfChildrenInBooking === "string"
            ? Number(numberOfChildrenInBooking)
            : numberOfChildrenInBooking;

        const queryIndexDate = "date";
        const queryValueDate = date;

        const getDateDocumentToUpdate = await listDocumentsByQueryOrSearch(
          databaseId,
          termDatesCollectionId,
          queryIndexDate,
          queryValueDate,
          false,
          25
        );

        const dateDocument = getDateDocumentToUpdate.documents;

        const { $id, morningSessionSpaces, afternoonSessionSpaces } =
          dateDocument[0];

        let updatedSessionSpaces = {};

        switch (sessionChoice) {
          case "morning":
            updatedSessionSpaces = {
              morningSessionSpaces:
                operation === "add"
                  ? morningSessionSpaces + numberOfChildrenAsNumber
                  : morningSessionSpaces - numberOfChildrenAsNumber,
            };
            break;
          case "afternoonShort":
          case "afternoonLong":
            updatedSessionSpaces = {
              afternoonSessionSpaces:
                operation === "add"
                  ? afternoonSessionSpaces + numberOfChildrenAsNumber
                  : afternoonSessionSpaces - numberOfChildrenAsNumber,
            };
            break;
          case "morningAndAfternoonShort":
          case "morningAndAfternoonLong":
            updatedSessionSpaces = {
              morningSessionSpaces:
                operation === "add"
                  ? morningSessionSpaces + numberOfChildrenAsNumber
                  : morningSessionSpaces - numberOfChildrenAsNumber,
              afternoonSessionSpaces:
                operation === "add"
                  ? afternoonSessionSpaces + numberOfChildrenAsNumber
                  : afternoonSessionSpaces - numberOfChildrenAsNumber,
            };
            break;
          default:
            throw new Error(`Unknown session type: ${sessionChoice}`);
        }

        const documentId = $id;
        const data = updatedSessionSpaces;

        await manageDatabaseDocument(
          "update",
          databaseId,
          termDatesCollectionId,
          documentId,
          data
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRecurringSessionsBookingDataAsync = createAsyncThunk(
  "addRecurringSessionsBookingData",
  async (
    {
      bookingsToAdd,
      sessionType,
      childrenSelectedForBooking,
      usersChildren,
      name,
      phoneNumber,
      id,
      email,
      databaseId,
      collectionId,
    },
    thunkAPI
  ) => {
    try {
      // Array to hold the new objects
      const bookingsArray = [];

      // Loop through each item in bookingData
      for (let i = 0; i < bookingsToAdd.length; i++) {
        // Create a new object with the date from bookingData and placeholder properties
        const newObject = {
          date: bookingsToAdd[i].date,
          sessionType: sessionType,
          childrenInBooking: createChildrenToAddToBooking(
            childrenSelectedForBooking,
            usersChildren
          ),
          parentName: name,
          parentPhoneNumber: phoneNumber,
          parentsUserId: id,
          parentEmail: email,
        };

        bookingsArray.push(newObject);
      }

      const createdDocumentIds = [];

      for (const booking of bookingsArray) {
        let sessionBookings = [];

        if (
          booking.sessionType === "morningAndAfternoonShort" ||
          booking.sessionType === "morningAndAfternoonLong"
        ) {
          // Create separate session bookings for morning and afternoon
          const morningBooking = {
            parentsUserId: booking.parentsUserId,
            date: booking.date,
            sessionType: "morning",
            childrensName: booking.childrenInBooking,
            parentName: booking.parentName,
            parentEmail: booking.parentEmail,
            parentPhoneNumber: booking.parentPhoneNumber,
          };
          const afternoonBooking = {
            parentsUserId: booking.parentsUserId,
            date: booking.date,
            sessionType:
              booking.sessionType === "morningAndAfternoonShort"
                ? "afternoonShort"
                : "afternoonLong",
            childrensName: booking.childrenInBooking,
            parentName: booking.parentName,
            parentEmail: booking.parentEmail,
            parentPhoneNumber: booking.parentPhoneNumber,
          };

          sessionBookings = [morningBooking, afternoonBooking];
        } else {
          // For other session types, create a single session booking
          const sessionBooking = {
            parentsUserId: booking.parentsUserId,
            date: booking.date,
            sessionType: booking.sessionType,
            childrensName: booking.childrenInBooking,
            parentName: booking.parentName,
            parentEmail: booking.parentEmail,
            parentPhoneNumber: booking.parentPhoneNumber,
          };

          sessionBookings = [sessionBooking];
        }

        // Create documents for each session booking
        for (const sessionBooking of sessionBookings) {
          const documentId = ID.unique(); // Replace with your logic to generate document ID
          await manageDatabaseDocument(
            "create",
            databaseId,
            collectionId,
            documentId,
            sessionBooking
          );
          createdDocumentIds.push(documentId);
        }
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
