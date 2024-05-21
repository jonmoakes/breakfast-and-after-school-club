import { Text } from "../../../styles/p/p.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const WhatAreCookiesAndLocalStorage = () => (
  <ParentDiv>
    <BlueH2>what are cookies and local storage?</BlueH2>
    <Text>
      Cookies are small text files stored on your device (computer, tablet, or
      mobile) when you visit a website or use an app.
    </Text>
    <Text>
      They help the website or app recognise your device and store certain
      information about your preferences or past actions.
    </Text>
    <Text>
      Local storage is a web storage method that allows websites and apps to
      store data locally on your device.
    </Text>
    <Text>
      Unlike cookies, data stored in local storage is not automatically sent to
      the server with each HTTP request and can hold more data.
    </Text>
  </ParentDiv>
);

export default WhatAreCookiesAndLocalStorage;
