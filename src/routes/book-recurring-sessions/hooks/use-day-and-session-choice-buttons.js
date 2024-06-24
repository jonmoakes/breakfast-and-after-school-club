import { useState } from "react";

import useRequestSessionPricesThunk from "../../../hooks/get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-request-session-prices-thunk";

const useDayAndSessionChoiceButtons = (
  sessionTypesAndPrices,
  afternoonShortSessionPrice
) => {
  const { requestSessionPricesThunk } = useRequestSessionPricesThunk();

  const [dayChoice, setDayChoice] = useState("");
  const [sessionChoice, setSessionChoice] = useState("");

  const resetChoices = () => {
    setDayChoice("");
    setSessionChoice("");
  };

  const setChoiceAndGetSessionTypesAndPrices = (choice) => {
    if (!Object.keys(sessionTypesAndPrices).length) {
      setDayChoice(choice);
      requestSessionPricesThunk();
    } else {
      setDayChoice(choice);
    }
  };

  const dayChoiceButtons = [
    {
      id: 1,
      heading: "",
      text: "monday",
      onClick: () => setChoiceAndGetSessionTypesAndPrices("monday"),
    },
    {
      id: 2,
      heading: "",
      text: "tuesday",
      onClick: () => setChoiceAndGetSessionTypesAndPrices("tuesday"),
    },
    {
      id: 3,
      heading: "",
      text: "wednesday",
      onClick: () => setChoiceAndGetSessionTypesAndPrices("wednesday"),
    },
    {
      id: 4,
      heading: "",
      text: "thursday",
      onClick: () => setChoiceAndGetSessionTypesAndPrices("thursday"),
    },
    {
      id: 5,
      heading: "",
      text: "friday",
      onClick: () => setChoiceAndGetSessionTypesAndPrices("friday"),
    },
  ];

  const sessionChoiceButtons = [
    {
      id: 6,
      heading: "",
      text: "morning",
      onClick: () => setSessionChoice("morning"),
    },
    {
      id: 7,
      heading: "",
      text: afternoonShortSessionPrice ? "afternoon Short" : "afternoon",
      onClick: () =>
        setSessionChoice(
          afternoonShortSessionPrice ? "afternoonShort" : "afternoonLong"
        ),
    },

    ...(afternoonShortSessionPrice
      ? [
          {
            id: 8,
            heading: "",
            text: "afternoon Long",
            onClick: () => setSessionChoice("afternoonLong"),
          },
          {
            id: 9,
            heading: "",
            text: "AM & PM short",
            onClick: () => setSessionChoice("morningAndAfternoonShort"),
          },
          {
            id: 10,
            heading: "",
            text: "AM & PM Long",
            onClick: () => setSessionChoice("morningAndAfternoonLong"),
          },
        ]
      : [
          {
            id: 11,
            heading: "",
            text: "AM & PM",
            onClick: () => setSessionChoice("morningAndAfternoonLong"),
          },
        ]),
  ].filter((button) => button); // Filter out any null buttons

  return {
    dayChoice,
    sessionChoice,
    dayChoiceButtons,
    sessionChoiceButtons,
    resetChoices,
  };
};

export default useDayAndSessionChoiceButtons;
