import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SecurityMeasures = () => (
  <ParentDiv>
    <BlueH2>Security Measures:</BlueH2>
    <Text>
      We implement robust security measures to protect your personal
      information:
    </Text>
    <Text>
      we using a leading{" "}
      <a className="red" href="https://en.wikipedia.org//wiki/Open_source">
        Open source
      </a>{" "}
      data service provider.
    </Text>
    <Text>
      this means that all of their code can be vetted by anyone and any security
      holes plugged quickly and efficiently.
    </Text>
    <Text>here is some information about their security protocols:</Text>
    <BlackHr />
    <Text>
      Data is encrypted both at rest and in transit using industry-standard
      protocols (TLS for data in transit).
    </Text>
    <Text>
      Secure authentication mechanisms (e.g. email & password, OAuth providers )
      and role-based access control (RBAC) to verify identities and manage
      permissions.
    </Text>
    <Text>Files and data are securely stored with controlled access.</Text>
    <Text>
      We maintain detailed logs of user activities and API requests to monitor
      for suspicious activity and ensure compliance with our security policies.
      Audit trails provide a historical record of data access and changes.
    </Text>
    <Text>
      Our app supports CORS to control which domains can access our resources,
      and we deploy Appwrite in isolated environments to ensure data
      segregation.
    </Text>
    <Text>
      We perform automated backups to ensure that your data is regularly backed
      up and can be restored if needed.
    </Text>
    <BlackHr />

    <Text>
      <a className="red" href="https://stripe.com/gb">
        Stripe
      </a>{" "}
      is our chosen payment processor.
    </Text>
    <Text>
      for administrators, we create your own personal stripe account, so that
      your finances are firmly under your control.
    </Text>
    <Text>
      for both administrators and users, here is some information about their
      security protocols that Stripe employs to ensure your payment information
      is protected:
    </Text>

    <BlackHr />

    <Text>
      PCI Compliance:
      <br />
      Stripe is a certified PCI Service Provider Level 1, adhering to the
      highest industry standards for payment security.
    </Text>

    <BlackHr />

    <Text>
      Data Encryption:
      <br />
      All payment data is encrypted using AES-256 encryption at rest and TLS for
      data in transit.
    </Text>

    <BlackHr />
    <Text>
      Tokenisation:
      <br />
      Stripe replaces sensitive card information with a unique token, meaning
      your payment details are never stored on our servers.
    </Text>

    <BlackHr />
    <Text>
      Fraud Prevention:
      <br />
      Stripe Radar uses advanced machine learning to detect and prevent
      fraudulent transactions in real time.
    </Text>

    <BlackHr />
    <Text>
      Secure Infrastructure:
      <br />
      Stripe's data centers comply with top industry standards for physical
      security and availability.
    </Text>

    <BlackHr />
    <Text>
      Monitoring and Logging:
      <br />
      Continuous monitoring and detailed audit logs ensure that any potential
      security threats are detected and mitigated promptly.
    </Text>

    <BlackHr />
    <Text>
      Strong Access Controls:
      <br />
      Stripe uses role-based access control and two-factor authentication to
      protect against unauthorised access. By using Stripe, we ensure that your
      payment information is handled with the highest level of security and
      protection.
    </Text>
    <BlackHr />
    <Text>
      By leveraging these security features, we ensure that your personal
      information is protected against unauthorised access, use, and disclosure.
      If you have any questions or concerns about our data security practices,
      please contact us at:
      <br />
      <br />
      <LowercasedSpan>jonathan@solaris-apps.co.uk</LowercasedSpan>
    </Text>
  </ParentDiv>
);

export default SecurityMeasures;
