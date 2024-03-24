const useChildInfoLogic = (chosenEntry) => {
  const oneEntryHasBeenSelected = () => {
    return chosenEntry.length === 1 ? true : false;
  };

  const moreThanOneEntryHasBeenSelected = () => {
    return chosenEntry.length > 1 ? true : false;
  };

  return { oneEntryHasBeenSelected, moreThanOneEntryHasBeenSelected };
};

export default useChildInfoLogic;
