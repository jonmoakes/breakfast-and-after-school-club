import useSessionTimesVariables from "./hooks/use-session-times-variables";

import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const MorningSessionTimeInfo = () => {
  const { morningSessionTime } = useSessionTimesVariables();

  return (
    <>
      <BlueH2>morning session time</BlueH2>
      <Text>your current morning session time is:</Text>
      <Text>
        <RedSpan>{morningSessionTime}</RedSpan>
      </Text>
    </>
  );
};

export default MorningSessionTimeInfo;
