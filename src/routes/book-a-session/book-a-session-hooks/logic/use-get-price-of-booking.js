import useSelectBookSessionSelectors from "../../../../hooks/get-selectors/use-get-book-session-selectors";

import { priceMultipliedBy100 } from "../../../../functions/price-multiplied-by-100";

const useGetPriceOfBooking = () => {
  const { childrenSelectedForBooking } = useSelectBookSessionSelectors();

  //if user has only one child in the database, childrenSelectedForBooking.length will be 0 - so price there will be 1 child 'selected'ß = sessionPrice * 100.
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
