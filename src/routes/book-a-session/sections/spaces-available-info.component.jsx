import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { Text } from "../../../styles/p/p.styles";

const SpacesAvailableInfo = () => {
  const { noSessionsAvailable, noDateSelected, isTodayAndAfterCloseTime } =
    useConditionalLogic();

  return (
    <>
      {noDateSelected() ? null : isTodayAndAfterCloseTime() ? (
        <Text>sorry, we're closed for today</Text>
      ) : noSessionsAvailable() ? (
        <>
          <Text>sorry, we have no sessions available today.</Text>
          <Text>
            if any become available, they will be updated here in realtime so
            please check back regularly!
          </Text>
        </>
      ) : null}
    </>
  );
};

export default SpacesAvailableInfo;
