import { useSelector } from "react-redux";

import useCancelAndReturn from "../../hooks/use-cancel-and-return";

import { selectChosenEntryChildDetailsSelectors } from "../../store/chosen-entry-child-details/chosen-entry-child-details.slice";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Fragment } from "react";
import { HrWithMargin } from "../../styles/hr/hr.styles";

const ChildDetails = () => {
  const { cancelAndReturn } = useCancelAndReturn();

  const { chosenEntryChildDetails } = useSelector(
    selectChosenEntryChildDetailsSelectors
  );

  return (
    <>
      <ParentDiv>
        <HrWithMargin />

        {!chosenEntryChildDetails.length
          ? null
          : chosenEntryChildDetails.map((childDetails) => {
              const {
                childName,
                age,
                medicalInfo,
                dietryRequirements,
                additionalInfo,
              } = childDetails;

              return (
                <Fragment key={crypto.randomUUID()}>
                  <BlueH2>child name:</BlueH2>
                  <Text>{childName}</Text>

                  <BlueH2>age:</BlueH2>
                  <Text>{age}</Text>

                  {medicalInfo ? (
                    <>
                      <BlueH2>medical info:</BlueH2>
                      <Text>{medicalInfo}</Text>
                    </>
                  ) : null}

                  {dietryRequirements ? (
                    <>
                      <BlueH2>dietry requirements:</BlueH2>
                      <Text>{dietryRequirements}</Text>
                    </>
                  ) : null}

                  {additionalInfo ? (
                    <>
                      <BlueH2>additional info:</BlueH2>
                      <Text>{additionalInfo}</Text>
                    </>
                  ) : null}
                  <HrWithMargin />
                </Fragment>
              );
            })}
      </ParentDiv>

      <ParentDiv>
        <YellowGreenButton onClick={cancelAndReturn}>
          return to table
        </YellowGreenButton>
      </ParentDiv>
    </>
  );
};

export default ChildDetails;
