import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import { selectCurrentUser } from "../../../store/user/user.selector";
// import { selectBookedSessions } from "../../../store/booked-sessions/booked-sessions.selector";
// import { setBookedSessions } from "../../../store/booked-sessions/booked-sessions.slice";

const useGetBookedSessionsListener = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const bookedSessions = useSelector(selectBookedSessions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${import.meta.env.VITE_DEVELOPMENT_DATABASE_ID}.collections.${
        import.meta.env.VITE_BOOKED_SESSIONS_COLLECTION_ID
      }.documents`,

      (response) => {
        console.log(response);
        // const updatedChild = response.payload;
        // //Find the child with the matching ID, otherwise return the original child that was in the array
        // const updatedChildren = usersChildren.map((child) =>
        //   child.$id === updatedChild.$id ? { ...child, ...updatedChild } : child
        // );

        // dispatch(setUsersChildren(updatedChildren));
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch, currentUser]);
};

export default useGetBookedSessionsListener;
