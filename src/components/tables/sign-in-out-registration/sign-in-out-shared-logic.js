const currentDate = new Date();
const hours = currentDate.getHours();

export const isInMorningHours = hours >= 7 && hours <= 10 && true;
export const isInAfteroonHours = hours >= 14 && hours <= 18 && true;

currentDate.setHours(0, 0, 0, 0);

export const isSameDate = (date) => {
  return date.getTime() === currentDate.getTime() && true;
};
