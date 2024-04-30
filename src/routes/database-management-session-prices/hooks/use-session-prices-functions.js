const useSessionPricesFunctions = () => {
  const isPriceValueValid = (newPrice) => {
    const priceString = newPrice.toString();
    const includesDecimal = priceString.includes(".");
    const isWithinLengthRange =
      priceString.length >= 3 && priceString.length <= 5;

    // Return true if the number includes a decimal point and is within the length range, otherwise return false
    return includesDecimal && isWithinLengthRange;
  };

  return { isPriceValueValid };
};

export default useSessionPricesFunctions;
