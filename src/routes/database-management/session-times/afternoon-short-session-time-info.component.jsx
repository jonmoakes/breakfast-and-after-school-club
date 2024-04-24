import useSessionTimesVariables from "./hooks/use-session-times-variables";

import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AfternoonShortSessionTimeInfo = () => {
  const { afternoonShortSessionTime } = useSessionTimesVariables();

  return (
    <>
      <BlueH2>afternoon short session time</BlueH2>
      <Text>your current afternoon short session time is:</Text>
      <Text>
        <RedSpan>{afternoonShortSessionTime}</RedSpan>
      </Text>
    </>
  );
};

export default AfternoonShortSessionTimeInfo;
