export const getNumberOfChildrenInBooking = (children) => {
  return children ? children.split(",").length - 1 + 1 : 1;
};
