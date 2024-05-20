import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const DesktopInstructions = () => (
  <ParentDiv>
    <BlackTitle>Desktop/Laptop Machines:</BlackTitle>

    <BlueH2>Google Chrome:</BlueH2>
    <StyledUnorderedList>
      <BlackListItem>Open Chrome and navigate to our site.</BlackListItem>
      <BlackListItem>
        In the address bar, click on the install icon (a small plus sign inside
        a circle) on the right side of the address bar.
      </BlackListItem>
      <BlackListItem>Click "Install" in the prompt that appears.</BlackListItem>
      <BlackListItem>
        Breakfast & After School Club will now be installed and accessible from
        your desktop.
      </BlackListItem>
    </StyledUnorderedList>

    <BlackHr />

    <BlueH2>Safari (macOS):</BlueH2>
    <StyledUnorderedList>
      <BlackListItem>Open Safari and go to our site.</BlackListItem>
      <BlackListItem>
        Click on the Share button in the toolbar (a square with an upward
        arrow).
      </BlackListItem>
      <BlackListItem>Select "Add to Home Screen".</BlackListItem>
      <BlackListItem>
        Follow the prompts to add Breakfast & After School Club to your desktop.
      </BlackListItem>
    </StyledUnorderedList>

    <BlackHr />

    <BlueH2>Mozilla Firefox:</BlueH2>
    <StyledUnorderedList>
      <BlackListItem>Open Firefox and go to our site.</BlackListItem>
      <BlackListItem>
        Click the menu button (three horizontal lines) at the top-right corner.
      </BlackListItem>
      <BlackListItem>
        Select "More Tools" and then "Install Breakfast & After School Club".
      </BlackListItem>
      <BlackListItem>Follow the prompts to install the app.</BlackListItem>
      <BlackListItem>
        Breakfast & After School Club will now be added to your desktop.
      </BlackListItem>
    </StyledUnorderedList>

    <BlackHr />

    <BlueH2>Microsoft Edge:</BlueH2>
    <StyledUnorderedList>
      <BlackListItem>Open Edge and navigate to our site.</BlackListItem>
      <BlackListItem>
        In the address bar, click on the install icon (a small plus sign inside
        a circle) on the right side.
      </BlackListItem>
      <BlackListItem>Click "Install" in the dialog box.</BlackListItem>
      <BlackListItem>
        Breakfast & After School Club will now be available from your desktop.
      </BlackListItem>
    </StyledUnorderedList>

    <BlackHr />

    <BlueH2>Brave:</BlueH2>
    <StyledUnorderedList>
      <BlackListItem>Open Brave and navigate to our site.</BlackListItem>
      <BlackListItem>
        In the address bar, click on the install icon (a small plus sign inside
        a circle).
      </BlackListItem>
      <BlackListItem>Click "Install" in the prompt.</BlackListItem>
      <BlackListItem>
        Breakfast & After School Club will be installed and accessible from your
        desktop.
      </BlackListItem>
    </StyledUnorderedList>

    <BlackHr />
  </ParentDiv>
);

export default DesktopInstructions;
