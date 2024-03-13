import { useState } from "react";
import { getParentsEmail } from "../functions/get-user-phone-or-email";

const useGetUsersEmail = (row) => {
  const [emailState, setEmailState] = useState({
    isLoading: false,
    error: null,
  });

  const updateEmailState = (propertyName, value) => {
    setEmailState((prevState) => ({
      ...prevState,
      [propertyName]: value,
    }));
  };

  const { isLoading, error } = emailState;

  const getUsersEmail = async () => {
    try {
      updateEmailState("isLoading", true);
      const email = await getParentsEmail(row);
      if (!email) return;
      const subject = encodeURIComponent(
        "Message From Breakfast & After School Club"
      );
      window.location.href = `mailto:${email}?Subject=${subject}`;
    } catch (error) {
      const errorMessage = error.message || "Unknown error";
      updateEmailState(
        "error",
        `Error Getting Email Address
      Error Received:
      '${errorMessage.toUpperCase()}'`
      );
    } finally {
      updateEmailState("isLoading", false);
    }
  };

  return { isLoading, error, getUsersEmail };
};

export default useGetUsersEmail;
