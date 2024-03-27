import { useSelector } from "react-redux";

import { selectSessionTypesAndPricesSelectors } from "../../store/session-types-and-prices/session-types-and-prices.slice";

const useGetSessionTypesAndPricesSelectors = () => {
  const {
    sessionTypesAndPricesIsLoading,
    sessionTypesAndPrices,
    sessionTypesAndPricesError,
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

  return {
    sessionTypesAndPricesIsLoading,
    sessionTypesAndPrices,
    sessionTypesAndPricesError,
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
  };
};

export default useGetSessionTypesAndPricesSelectors;
