import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import usePricesToFixedLogic from "../../../hooks/use-prices-to-fixed-logic";

const useSessionPricesVariables = () => {
  const {
    newMorningSessionPrice,
    newAfternoonShortSessionPrice,
    newAfternoonLongSessionPrice,
    newMorningAndAfternoonShortSessionPrice,
    newMorningAndAfternoonLongSessionPrice,
    sessionPricesResult,
    sessionPricesError,
  } = useGetDatabaseManagementSelectors();

  const {
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
  } = useGetSessionTypesAndPricesSelectors();
  const {
    morningSessionPriceToFixed,
    afternoonShortSessionPriceToFixed,
    afternoonLongSessionPriceToFixed,
    morningAndAfternoonShortSessionPriceToFixed,
    morningAndAfternoonLongSessionPriceToFixed,
  } = usePricesToFixedLogic();

  return {
    newMorningSessionPrice,
    newAfternoonShortSessionPrice,
    newAfternoonLongSessionPrice,
    newMorningAndAfternoonShortSessionPrice,
    newMorningAndAfternoonLongSessionPrice,
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
    morningSessionPriceToFixed,
    afternoonShortSessionPriceToFixed,
    afternoonLongSessionPriceToFixed,
    morningAndAfternoonShortSessionPriceToFixed,
    morningAndAfternoonLongSessionPriceToFixed,
    sessionPricesResult,
    sessionPricesError,
  };
};

export default useSessionPricesVariables;
