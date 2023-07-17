import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

const Account = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { name } = currentUser;

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>your account</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>welcome {name}!</Text>
      </ParentDiv>
    </Container>
  );
};

export default Account;
