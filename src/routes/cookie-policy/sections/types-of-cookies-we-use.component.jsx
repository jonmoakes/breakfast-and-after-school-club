import { Text } from "../../../styles/p/p.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const TypesOfCookiesWeUse = () => (
  <ParentDiv>
    <BlueH2>types of cookies we use:</BlueH2>
    <Text>We use the following types of cookies:</Text>
    <Text>
      Essential Cookies:
      <br />
      These cookies are necessary for the app to function correctly. They enable
      core functionalities such as security, network management, and
      accessibility. You cannot opt-out of these cookies as they are essential
      for the app's operation.
    </Text>

    <Text>
      Functionality Cookies:
      <br />
      These cookies remember your preferences and choices to provide a more
      personalised experience. For example, they can remember your login details
      and preferences so you don't have to re-enter them each time you use the
      app.
    </Text>
    <Text>
      third-party cookies:
      <br />
      In addition to our own cookies, we use third-party cookies to help us
      improve our services and manage transactions.
    </Text>
    <Text>
      One such third-party service is Stripe, which we use for payment
      processing.
    </Text>
    <Text>
      Purpose of stripe cookies:
      <br />
      Stripe uses cookies to facilitate the payment process, ensure security and
      prevent fraud.
    </Text>
    <Text>
      Type of Data Collected:
      <br />
      These cookies may collect information such as your IP address, device
      information, and transaction details.
    </Text>
    <Text>
      Stripe's Privacy Policy:
      <br />
      For more information on how Stripe uses cookies and handles your data,
      please refer to{" "}
      <a className="red" href="https://stripe.com/gb/privacy">
        Stripe’s Privacy Policy
      </a>
      .
    </Text>
  </ParentDiv>
);

export default TypesOfCookiesWeUse;
