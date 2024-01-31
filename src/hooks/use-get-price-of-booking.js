import { useSelector } from "react-redux";
import { selectChildrenSelectedForBooking } from "../store/book-session/book-session.slice";

import { priceMultipliedBy100 } from "../functions/price-multiplied-by-100";

const useGetPriceOfBooking = () => {
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );

  // if only 1 child is selected or if users only has one child, price = sessionPrice * 100.
  // If more than one child is selected, price = the session price * however many children have been selected.
  const getPriceOfBooking = (sessionPrice) => {
    const price = !childrenSelectedForBooking.length
      ? priceMultipliedBy100(sessionPrice)
      : priceMultipliedBy100(sessionPrice * childrenSelectedForBooking.length);

    return price;
  };

  return { getPriceOfBooking };
};

export default useGetPriceOfBooking;
