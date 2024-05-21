import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const Disclaimers = () => (
  <ParentDiv>
    <BlueH2>disclaimers:</BlueH2>
    <Text>
      We strive to provide a reliable and high-quality service, but we do not
      guarantee that access to the app will be uninterrupted or error-free.
    </Text>
    <Text>
      There may be times when the app is unavailable due to maintenance,
      technical issues, or other reasons beyond our control.
    </Text>
    <Text>
      the app is provided "as is" and without any warranties of any kind, either
      express or implied.
    </Text>
    <Text>
      This includes, but is not limited to, implied warranties of
      merchantability, fitness for a particular purpose, and non-infringement.
    </Text>
    <Text>
      We do not warrant that the app will meet your requirements, achieve any
      intended results, or be free of viruses or other harmful components.
    </Text>
    <Text>
      To the maximum extent permitted by applicable law,{" "}
      <a className="red" href="https://www.solaris-apps.co.uk">
        solaris apps
      </a>{" "}
      will not be liable for any indirect, incidental, special, consequential,
      or punitive damages, or any loss of profits or revenues, whether incurred
      directly or indirectly, or any loss of data, use, goodwill, or other
      intangible losses, resulting from (a) your use or inability to use the
      app; (b) any unauthorized access to or use of our servers and/or any
      personal information stored therein; (c) any interruption or cessation of
      transmission to or from the app; (d) any bugs, viruses, trojan horses, or
      the like that may be transmitted to or through our app by any third party;
      (e) any errors or omissions in any content or for any loss or damage
      incurred as a result of your use of any content posted, emailed,
      transmitted, or otherwise made available through the app, whether based on
      warranty, contract, tort (including negligence), or any other legal
      theory, whether or not we have been informed of the possibility of such
      damage.
    </Text>
    <Text>
      Our total liability to you for any claim arising out of or relating to
      these terms or your use of the app shall not exceed the amount you have
      paid us for the use of the app in the past twelve months.
    </Text>
  </ParentDiv>
);

export default Disclaimers;
