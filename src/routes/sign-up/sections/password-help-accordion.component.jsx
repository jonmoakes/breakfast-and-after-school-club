import Balancer from "react-wrap-balancer";
import useShouldShowElementActions from "../../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useGetShouldShowElementSelectors from "../../../hooks/get-selectors/use-get-should-show-element-selectors";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan, RedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const PasswordHelpAccordion = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={dispatchShowOppositeShowElement}
        >
          <div>
            {shouldShowElement ? "ok, close" : "password security guidlines"}
          </div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <BlueH2>
              <Balancer>
                Best Practices for Creating a Secure Password:
              </Balancer>
            </BlueH2>
            <Text>
              Creating a secure password is essential for protecting your
              personal information and ensuring your online security.
            </Text>
            <Text>
              Here are some guidelines to help you create a strong and effective
              password.
            </Text>

            <BlackHr />

            <BlueH2>
              <Balancer>Length and Complexity:</Balancer>
            </BlueH2>
            <Text>Ensure your password is at least 8 characters long.</Text>
            <Text>Longer passwords are generally more secure.</Text>
            <Text>
              Use a Mix of Characters: Combine uppercase and lowercase letters,
              numbers, and special characters (
              <LowercasedSpan>e.g.</LowercasedSpan> !, @, #, $, %, ^, &, *) to
              enhance complexity.
            </Text>

            <BlackHr />

            <BlueH2>
              <Balancer>Avoid Common Passwords:</Balancer>
            </BlueH2>
            <Text>
              Steer clear of easily guessable passwords such as "12345678",
              "password", "qwerty", or "letmein".
            </Text>
            <Text>
              Cyber attackers often use these first in their attempts to break
              into accounts.
            </Text>

            <BlackHr />

            <BlueH2>
              <Balancer>No Personal Information:</Balancer>
            </BlueH2>
            <Text>
              Do not include easily accessible information like your name,
              birthdate, or common words related to you, as these can be easily
              guessed by others.
            </Text>

            <BlackHr />

            <BlueH2>
              <Balancer>Use Unique Passwords:</Balancer>
            </BlueH2>
            <Text>Never reuse passwords across multiple accounts.</Text>
            <Text>
              If one account is compromised, others are at risk if they share
              the same password.
            </Text>

            <BlackHr />

            <BlueH2>Password Manager:</BlueH2>
            <Text>
              Consider using a password manager to generate and store unique
              passwords for each of your accounts.
            </Text>
            <Text>
              This ensures you don’t have to remember every password while
              maintaining high security.
            </Text>
            <Text>
              breakfast and after school club highly recommends{" "}
              <a
                className="red"
                href="https://www.dashlane.com/personal-password-manager"
              >
                dashlane
              </a>{" "}
              for your password manager.
            </Text>
            <Text>
              please note, this is NOT an affiliate link - Just A personal
              recommendation!
            </Text>

            <BlackHr />

            <BlueH2>
              <Balancer>Make It Memorable:</Balancer>
            </BlueH2>
            <Text>
              Create a 'passphrase' by stringing together unrelated words.
            </Text>
            <Text>
              For example, "<RedSpan>Sunflower!Rivers2Jacket</RedSpan>" is both
              secure and easier to remember.
            </Text>

            <BlackHr />

            <BlueH2>
              <Balancer>Substitution Techniques:</Balancer>
            </BlueH2>
            <Text>Replace certain letters with numbers or symbols.</Text>
            <Text>
              For instance, "<RedSpan>P@ssw0rd!</RedSpan>" is stronger than "
              <RedSpan>Password</RedSpan>".
            </Text>

            <BlackHr />

            <BlueH2>
              <Balancer>change passwords regularly:</Balancer>
            </BlueH2>
            <Text>Change your passwords periodically.</Text>
            <Text>
              Sometimes, breaches or compromises go undetected for a period.{" "}
            </Text>
            <Text>
              Regularly changing passwords can limit the window of opportunity
              for attackers who may have obtained your credentials without your
              knowledge.
            </Text>

            <BlackHr />

            <BlueH2>
              <Balancer>Monitor for Breaches:</Balancer>
            </BlueH2>
            <Text>Stay vigilant about data breaches.</Text>
            <Text>
              If a service you use reports a breach, change your password
              immediately.
            </Text>

            <BlackHr />

            <BlueH2>
              <Balancer>strong password example:</Balancer>
            </BlueH2>
            <Text>
              A strong password might look something like this:{" "}
              <RedSpan>T3a$uR3#G@t3!2024</RedSpan>.
            </Text>
            <Text>
              This password is 16 characters long and uses a mix of uppercase
              and lowercase letters, numbers, and special characters.
            </Text>
            <Text>
              it would take approximately 2.28 billion years to crack this
              password using a brute force attack with a high-end GPU capable of
              making 1 trillion guesses per second. This makes the password
              extremely secure against brute force attacks.
            </Text>
            <Text>
              By following these best practices, you can significantly enhance
              your online security and protect your personal information from
              unauthorised access.
            </Text>

            <BlackHr />

            <BlueH2>Disclaimer:</BlueH2>
            <Text>
              please do not use any of the suggestions in this guide as your
              password!
            </Text>
            <Text>they are merely listed as examples.</Text>

            <BlackHr />

            <YellowGreenButton onClick={dispatchHideShownElement}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default PasswordHelpAccordion;
