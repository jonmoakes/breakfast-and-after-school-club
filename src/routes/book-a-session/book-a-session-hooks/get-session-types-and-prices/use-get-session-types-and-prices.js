import { useSelector } from "react-redux";

import { selectSessionTypesAndPricesSelectors } from "../../../../store/session-types-and-prices/session-types-and-prices.slice";

const useGetSessionTypesAndPrices = () => {
  const {
    morningSessionType,
    morningSessionPrice,
    afternoonShortSessionType,
    afternoonShortSessionPrice,
    afternoonLongSessionType,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionType,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionType,
    morningAndAfternoonLongSessionPrice,
  } = useSelector(selectSessionTypesAndPricesSelectors);

  const morningSessionPriceToFixed = morningSessionPrice
    ? morningSessionPrice.toFixed(2)
    : null;

  const afternoonShortSessionPriceToFixed = afternoonShortSessionPrice
    ? afternoonShortSessionPrice.toFixed(2)
    : null;

  const afternoonLongSessionPriceToFixed = afternoonLongSessionPrice
    ? afternoonShortSessionPrice.toFixed(2)
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
    morningSessionType,
    morningSessionPrice,
    afternoonShortSessionType,
    afternoonShortSessionPrice,
    afternoonLongSessionType,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionType,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionType,
    morningAndAfternoonLongSessionPrice,
    morningSessionPriceToFixed,
    afternoonShortSessionPriceToFixed,
    afternoonLongSessionPriceToFixed,
    morningAndAfternoonShortSessionPriceToFixed,
    morningAndAfternoonLongSessionPriceToFixed,
  };
};

export default useGetSessionTypesAndPrices;
