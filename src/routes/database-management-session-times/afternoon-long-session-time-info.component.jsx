import useSessionTimesVariables from "./hooks/use-session-times-variables";

import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const AfternoonLongSessionTimeInfo = () => {
  const { afternoonLongSessionTime, afternoonShortSessionTime } =
    useSessionTimesVariables();

  return (
    <>
      <BlueH2>
        afternoon {afternoonShortSessionTime ? "Long" : null} session time
      </BlueH2>
      <Text>
        your current afternoon {afternoonShortSessionTime ? "Long" : null}{" "}
        session time is:
      </Text>
      <Text>
        <RedSpan>{afternoonLongSessionTime}</RedSpan>
      </Text>
    </>
  );
};

export default AfternoonLongSessionTimeInfo;
