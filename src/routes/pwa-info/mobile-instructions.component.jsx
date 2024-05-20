import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const MobileInstructions = () => (
  <ParentDiv>
    <BlackTitle>Mobile Devices:</BlackTitle>

    <BlueH2>Safari (iOS):</BlueH2>
    <StyledUnorderedList>
      <BlackListItem>Open Safari and navigate to our site.</BlackListItem>
      <BlackListItem>
        Tap the Share button (a square with an upward arrow).
      </BlackListItem>
      <BlackListItem>Select "Add to Home Screen".</BlackListItem>
      <BlackListItem>
        Follow the prompts to add Breakfast & After School Club to your home
        screen.
      </BlackListItem>
    </StyledUnorderedList>

    <BlackHr />

    <BlueH2>Google Chrome (Android):</BlueH2>
    <StyledUnorderedList>
      <BlackListItem>Open Chrome and navigate to our site.</BlackListItem>
      <BlackListItem>
        Tap the menu button (three vertical dots) at the top-right corner.
      </BlackListItem>
      <BlackListItem>Select "Add to Home Screen".</BlackListItem>
      <BlackListItem>
        Follow the prompts to add Breakfast & After School Club to your home
        screen.
      </BlackListItem>
    </StyledUnorderedList>

    <BlackHr />

    <BlueH2>Mozilla Firefox (Android):</BlueH2>
    <StyledUnorderedList>
      <BlackListItem>Open Firefox and go to our site.</BlackListItem>
      <BlackListItem>
        Tap the menu button (three vertical dots) at the top-right corner.
      </BlackListItem>
      <BlackListItem>Select "Install".</BlackListItem>
      <BlackListItem>
        Follow the prompts to add Breakfast & After School Club to your home
        screen.
      </BlackListItem>
    </StyledUnorderedList>

    <BlackHr />

    <BlueH2>Microsoft Edge (Android):</BlueH2>
    <StyledUnorderedList>
      <BlackListItem>Open Edge and navigate to our site.</BlackListItem>
      <BlackListItem>
        Tap the menu button (three horizontal dots) at the bottom of the screen.
      </BlackListItem>
      <BlackListItem>Select "Add to Home Screen".</BlackListItem>
      <BlackListItem>
        Follow the prompts to add Breakfast & After School Club to your home
        screen.
      </BlackListItem>
    </StyledUnorderedList>

    <BlackHr />

    <BlueH2>Brave (Android):</BlueH2>
    <StyledUnorderedList>
      <BlackListItem>Open Brave and navigate to our site.</BlackListItem>
      <BlackListItem>
        Tap the menu button (three vertical dots) at the bottom-right corner.
      </BlackListItem>
      <BlackListItem>Select "Add to Home Screen".</BlackListItem>
      <BlackListItem>
        Follow the prompts to add Breakfast & After School Club to your home
        screen.
      </BlackListItem>
    </StyledUnorderedList>

    <BlackHr />
  </ParentDiv>
);

export default MobileInstructions;
