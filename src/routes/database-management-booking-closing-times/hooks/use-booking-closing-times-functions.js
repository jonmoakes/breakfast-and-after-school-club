const useBookingclosingTimesFunctions = () => {
  const isValidTime = (time) => {
    const [hours, minutes] = time.split(":");
    if (hours < "00" || hours > "23" || minutes < "00" || minutes > "59") {
      return false;
    }
    return true;
  };

  return { isValidTime };
};

export default useBookingclosingTimesFunctions;
