import { useSelector } from "react-redux";

import { selectGetAllUsersSelectors } from "../../store/get-all-users/get-all-users.slice";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const NoUsersFound = ({ data }) => {
  const { allUsers } = useSelector(selectGetAllUsersSelectors);

  const noUsersFound = () => {
    return allUsers !== undefined && !allUsers.length && !data.length
      ? true
      : false;
  };

  return (
    <>
      {noUsersFound() || allUsers === undefined ? (
        <ParentDiv>
          <BlueH2>no users found.</BlueH2>
          <Text>no users have been created yet.</Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoUsersFound;
