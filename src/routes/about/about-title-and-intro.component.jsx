import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

const AboutTitleAndIntro = () => (
  <>
    <ParentDiv>
      <BlackTitle>about the app</BlackTitle>
    </ParentDiv>

    <ParentDiv>
      <Text>
        with the breakfast and after school club app, you can drastically cut
        down on the amount of time and paperwork it takes to manage your
        business.
      </Text>
      <Text>
        for your users, we have focused on making the app as simple to use as
        possible, allowing them to book and cancel sessions in just a few taps!
      </Text>

      <Text>
        Tap on the images to view the full-size image
        <br />( or pinch to zoom )
      </Text>
    </ParentDiv>
  </>
);

export default AboutTitleAndIntro;
