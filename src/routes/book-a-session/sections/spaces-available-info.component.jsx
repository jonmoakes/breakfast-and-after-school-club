import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { Text } from "../../../styles/p/p.styles";

const SpacesAvailableInfo = () => {
  const { noSpacesAvailableOnChosenDate } = useConditionalLogic();

  return (
    <>
      {noSpacesAvailableOnChosenDate() ? (
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
