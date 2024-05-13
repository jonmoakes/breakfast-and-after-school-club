import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SwitchUserOfAppChoice = ({ userOfAppChoice }) => {
  const { dispatchSetUserOfAppChoice } = useDatabaseManagementActions();

  return (
    <>
      {!userOfAppChoice ? null : (
        <ParentDiv>
          <Text>
            you have chosen that the user is a<br />
            <RedSpan>{userOfAppChoice}</RedSpan>
            <br />
            Of the app.
          </Text>

          <BlackHr />
          <Text>need to change?</Text>
          <YellowGreenButton
            onClick={() =>
              dispatchSetUserOfAppChoice(
                userOfAppChoice === "user" ? "non user" : "user"
              )
            }
          >
            change to{" "}
            {userOfAppChoice === "user" ? "Non User Of App" : "User Of App"}
          </YellowGreenButton>
        </ParentDiv>
      )}
    </>
  );
};

export default SwitchUserOfAppChoice;
