export const formatChildNames = (childrenInBooking) => {
  // Find the last comma in the string
  const lastCommaIndex = childrenInBooking.lastIndexOf(",");

  // If there is no comma, return the string as is
  if (lastCommaIndex === -1) {
    return childrenInBooking;
  }

  // Split the string into two parts: before the last comma and after the last comma
  const beforeLastComma = childrenInBooking.substring(0, lastCommaIndex);
  const afterLastComma = childrenInBooking.substring(lastCommaIndex + 1);

  // Trim any extra spaces and return the combined string with '&' replacing the last comma
  return `${beforeLastComma.trim()} & ${afterLastComma.trim()}`;
};
