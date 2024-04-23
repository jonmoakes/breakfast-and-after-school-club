const useSessionTimeFunctions = () => {
  const validateNewTime = (newTime) => {
    const pattern =
      /^[0-9a-zA-Z]{2}:[0-9a-zA-Z]{2} - [0-9a-zA-Z]{2}:[0-9a-zA-Z]{2}$/;

    return pattern.test(newTime);
  };

  return { validateNewTime };
};

export default useSessionTimeFunctions;
