import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";

import { Text } from "../../../styles/p/p.styles";

const NoChildrenAddedYet = () => {
  const { noChildrenAddedYet } = useRecurringSessionsFunctions();

  return (
    <>
      {noChildrenAddedYet() ? (
        <Text>please add your children first</Text>
      ) : null}
    </>
  );
};

export default NoChildrenAddedYet;
