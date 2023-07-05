import { useState, useEffect } from "react";
import { account } from "../../utils/appwrite/appwrite-config";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

const Account = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getSession = async () => {
      const promise = account.getSession("current");

      promise.then(
        function (response) {
          const { name } = response;
          setUserName(name);
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    };
    getSession();
  }, []);

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>your account</BlackTitle>
      </ParentDiv>
      <ParentDiv>
        <Text> welcome{userName ? ` ${userName}!` : "!"}</Text>
      </ParentDiv>
    </Container>
  );
};

export default Account;
