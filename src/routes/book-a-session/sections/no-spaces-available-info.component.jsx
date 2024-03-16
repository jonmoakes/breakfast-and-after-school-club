import useDatesLogic from "../book-a-session-hooks/dates-logic/use-dates-logic";

import { Text } from "../../../styles/p/p.styles";

const NoSpacesAvailableInfo = () => {
  const { noSpacesAvailableOnChosenDate } = useDatesLogic();

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

export default NoSpacesAvailableInfo;
