import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import usePricesToFixedLogic from "../../../../hooks/use-prices-to-fixed-logic";

const useSessionPricesVariables = () => {
  const {
    newMorningSessionPrice,
    newAfternoonShortSessionPrice,
    newAfternoonLongSessionPrice,
    newMorningAndAfternoonShortSessionPrice,
    newMorningAndAfternoonLongSessionPrice,
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

  const morningText = "morning";
  const afternoonText = "afternoon";
  const afternoonShortText = "afternoon short";
  const afternoonLongText = "afternoon long";
  const morningAndAfternoonShortText = "morning and afternoon short";
  const morningAndAfternoonLongText = "morning and afternoon long";

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
    morningText,
    afternoonText,
    afternoonShortText,
    afternoonLongText,
    morningAndAfternoonShortText,
    morningAndAfternoonLongText,
  };
};

export default useSessionPricesVariables;
