import { useState } from "react";
import { getParentsPhoneNumber } from "../functions/get-user-phone-or-email";

const useGetUsersPhone = (value, row) => {
  const [phoneState, setPhoneState] = useState({
    isLoading: false,
    error: null,
    parentPhoneNumber: "",
  });

  const updatePhoneState = (propertyName, propertyValue) => {
    setPhoneState((prevState) => ({
      ...prevState,
      [propertyName]: propertyValue,
    }));
  };

  const { isLoading, parentPhoneNumber, error } = phoneState;

  const hasPhoneNumber = (value) => {
    return value && !parentPhoneNumber && true;
  };

  const noPhoneNumber = (value) => {
    return !value && !parentPhoneNumber && true;
  };

  const foundPhoneNumberOnRequest = (value) => {
    return (
      !value && parentPhoneNumber && parentPhoneNumber !== "not found" && true
    );
  };

  const noPhoneNumberAfterRequest = (value) => {
    return !value && parentPhoneNumber === "not found" && true;
  };

  // const noPhoneNumber = !value && !parentPhoneNumber && true;
  // const foundPhoneNumberOnRequest =
  //   !value && parentPhoneNumber && parentPhoneNumber !== "not found" && true;
  // const noPhoneNumberAfterRequest =
  //   !value && parentPhoneNumber === "not found" && true;

  const getUsersPhone = async () => {
    try {
      updatePhoneState("isLoading", true);
      const phoneNumber = await getParentsPhoneNumber(row);
      if (phoneNumber) {
        updatePhoneState("parentPhoneNumber", phoneNumber);
      } else {
        updatePhoneState("parentPhoneNumber", "not found");
      }
    } catch (error) {
      const errorMessage = error.message || "Unknown error";
      updatePhoneState(
        "error",
        `Error Getting Phone Number
      Error Received:
      '${errorMessage.toUpperCase()}'`
      );
    } finally {
      updatePhoneState("isLoading", false);
    }
  };

  return {
    isLoading,
    error,
    parentPhoneNumber,
    getUsersPhone,
    hasPhoneNumber,
    noPhoneNumber,
    foundPhoneNumberOnRequest,
    noPhoneNumberAfterRequest,
  };
};

export default useGetUsersPhone;
