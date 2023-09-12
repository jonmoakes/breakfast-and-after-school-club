export const createSessionTypesAndPricesObject = (
  morningSessionPrice,
  afternoonShortSessionPrice,
  afternoonLongSessionPrice,
  morningAndAfternoonShortSessionPrice,
  morningAndAfternoonLongSessionPrice
) => {
  return {
    morningSession: {
      sessionType: "morning",
      price: morningSessionPrice,
    },
    afternoonShortSession: {
      sessionType: "afternoonShort",
      price: afternoonShortSessionPrice,
    },
    afternoonLongSession: {
      sessionType: "afternoonLong",
      price: afternoonLongSessionPrice,
    },
    morningAndAfternoonShortSession: {
      sessionType: "morningAndAfternoonShort",
      price: morningAndAfternoonShortSessionPrice,
    },
    morningAndAfternoonLongSession: {
      sessionType: "morningAndAfternoonLong",
      price: morningAndAfternoonLongSessionPrice,
    },
  };
};
