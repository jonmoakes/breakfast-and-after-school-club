import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

const useHandleNewPriceChanges = () => {
  const {
    dispatchSetNewMorningSessionPrice,
    dispatchSetNewAfternoonShortSessionPrice,
    dispatchSetNewAfternoonLongSessionPrice,
    dispatchSetNewMorningAndAfternoonShortSessionPrice,
    dispatchSetNewMorningAndAfternoonLongSessionPrice,
  } = useDatabaseManagementActions();

  const handleUpdateMorningSessionPriceChange = (event) => {
    dispatchSetNewMorningSessionPrice(event.target.value);
  };

  const handleUpdateAfternoonShortSessionPriceChange = (event) => {
    dispatchSetNewAfternoonShortSessionPrice(event.target.value);
  };

  const handleUpdateAfternoonLongSessionPriceChange = (event) => {
    dispatchSetNewAfternoonLongSessionPrice(event.target.value);
  };

  const handleUpdateMorningAndAfternoonShortSessionPriceChange = (event) => {
    dispatchSetNewMorningAndAfternoonShortSessionPrice(event.target.value);
  };

  const handleUpdateMorningAndAfternoonLongSessionPriceChange = (event) => {
    dispatchSetNewMorningAndAfternoonLongSessionPrice(event.target.value);
  };

  return {
    handleUpdateMorningSessionPriceChange,
    handleUpdateAfternoonShortSessionPriceChange,
    handleUpdateAfternoonLongSessionPriceChange,
    handleUpdateMorningAndAfternoonShortSessionPriceChange,
    handleUpdateMorningAndAfternoonLongSessionPriceChange,
  };
};

export default useHandleNewPriceChanges;
