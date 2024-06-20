import Balancer from "react-wrap-balancer";

import useCancelAndReturn from "../../hooks/use-cancel-and-return";
import useChosenEntryChildDetailsLogic from "./chosen-entry-child-details-hooks/use-chosen-entry-child-details-logic";
import useGetChosenEntryChildDetailsThunkUseEffect from "../../hooks/get-actions-and-thunks/chosen-entry-child-details-actions-and-thunks/use-get-chosen-entry-child-details-thunk-use-effect";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const ChildDetails = () => {
  const { cancelAndReturn } = useCancelAndReturn();
  const {
    noChosenEntryFound,
    childrensNamesInChosenEntry,
    chosenEntryChildDetails,
  } = useChosenEntryChildDetailsLogic();
  useGetChosenEntryChildDetailsThunkUseEffect(childrensNamesInChosenEntry);

  return (
    <>
      {noChosenEntryFound ? (
        <ParentDiv>
          <Text>
            no details found ( The child or children may have been deleted from
            the database ).
          </Text>
        </ParentDiv>
      ) : (
        chosenEntryChildDetails.map((childDetails) => {
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

              <BlueH2>
                <Balancer>name / image consent given:</Balancer>
              </BlueH2>

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
                  <BlueH2>dietary requirements:</BlueH2>
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
        })
      )}

      <ParentDiv>
        <YellowGreenButton onClick={cancelAndReturn}>
          return to table
        </YellowGreenButton>
      </ParentDiv>
    </>
  );
};

export default ChildDetails;
