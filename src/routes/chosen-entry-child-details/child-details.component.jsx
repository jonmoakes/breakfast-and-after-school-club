import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import useCancelAndReturn from "../../hooks/use-cancel-and-return";

import { selectChosenEntryChildDetailsSelectors } from "../../store/chosen-entry-child-details/chosen-entry-child-details.slice";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const ChildDetails = () => {
  const { cancelAndReturn } = useCancelAndReturn();

  const { chosenEntryChildDetails } = useSelector(
    selectChosenEntryChildDetailsSelectors
  );

  return (
    <>
      {!chosenEntryChildDetails.length
        ? null
        : chosenEntryChildDetails.map((childDetails) => {
            const {
              childName,
              age,
              consent,
              medicalInfo,
              dietryRequirements,
              additionalInfo,
            } = childDetails;

            return (
              <ParentDiv key={crypto.randomUUID()}>
                <BlackHr />

                <BlueH2>child name:</BlueH2>
                <Text>{childName}</Text>
                <BlackHr />

                <BlueH2>age:</BlueH2>
                <Text>{age}</Text>
                <BlackHr />
                <Balancer>
                  <BlueH2>name / image consent given:</BlueH2>
                </Balancer>
                <Text>{consent}</Text>
                <BlackHr />
                {medicalInfo ? (
                  <>
                    <BlueH2>medical info:</BlueH2>
                    <Text>{medicalInfo}</Text>
                    <BlackHr />
                  </>
                ) : null}

                {dietryRequirements ? (
                  <>
                    <BlueH2>dietry requirements:</BlueH2>
                    <Text>{dietryRequirements}</Text>
                    <BlackHr />
                  </>
                ) : null}

                {additionalInfo ? (
                  <>
                    <BlueH2>additional info:</BlueH2>
                    <Text>{additionalInfo}</Text>
                    <BlackHr />
                  </>
                ) : null}
              </ParentDiv>
            );
          })}

      <ParentDiv>
        <YellowGreenButton onClick={cancelAndReturn}>
          return to table
        </YellowGreenButton>
      </ParentDiv>
    </>
  );
};

export default ChildDetails;
