import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";

const usePricesToFixedLogic = () => {
  const {
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
  } = useGetSessionTypesAndPricesSelectors();

  const morningSessionPriceToFixed = morningSessionPrice
    ? morningSessionPrice.toFixed(2)
    : null;

  const afternoonShortSessionPriceToFixed = afternoonShortSessionPrice
    ? afternoonShortSessionPrice.toFixed(2)
    : null;

  const afternoonLongSessionPriceToFixed = afternoonLongSessionPrice
    ? afternoonLongSessionPrice.toFixed(2)
    : null;

  const morningAndAfternoonShortSessionPriceToFixed =
    morningAndAfternoonShortSessionPrice
      ? morningAndAfternoonShortSessionPrice.toFixed(2)
      : null;

  const morningAndAfternoonLongSessionPriceToFixed =
    morningAndAfternoonLongSessionPrice
      ? morningAndAfternoonLongSessionPrice.toFixed(2)
      : null;

  return {
    morningSessionPriceToFixed,
    afternoonShortSessionPriceToFixed,
    afternoonLongSessionPriceToFixed,
    morningAndAfternoonShortSessionPriceToFixed,
    morningAndAfternoonLongSessionPriceToFixed,
  };
};

export default usePricesToFixedLogic;
