import { add } from "date-fns";

export const tomorrow = add(new Date(), {
  days: 1,
});
