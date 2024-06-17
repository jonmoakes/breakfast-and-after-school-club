export const removeStarFromChildrensNamesIfExists = (childrenInBooking) => {
  const nameIncludesStar = childrenInBooking.includes("*");
  const nameWithoutStar = childrenInBooking.replace(/\*/g, "");
  return nameIncludesStar ? nameWithoutStar : childrenInBooking;
};
