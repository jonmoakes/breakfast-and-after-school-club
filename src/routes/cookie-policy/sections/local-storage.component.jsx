import { Text } from "../../../styles/p/p.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import {
  StyledUnorderedList,
  BlackListItem,
} from "../../../styles/ul/ul.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import Balancer from "react-wrap-balancer";

const LocalStorage = () => (
  <>
    <ParentDiv>
      <BlueH2>
        <Balancer>what do we use local storage for?</Balancer>
      </BlueH2>
      <Text>
        we use local storage to set your schools unique code so that we can
        enable the app to access the correct database.
      </Text>
      <Text>
        we also use it to set the amount of rows in the data tables that we use
        in the app to your preference.
      </Text>
    </ParentDiv>

    <ParentDiv>
      <BlueH2>managing local storage:</BlueH2>
      <Text>
        If you wish to delete local storage data, follow the instructions for
        your browser below:
      </Text>
      <StyledUnorderedList>
        <BlackListItem>
          Google Chrome:
          <br />
          Open Chrome. Click on the three vertical dots (menu) in the top-right
          corner. Select "Settings." Scroll down and click on "Privacy and
          security." Click on "Cookies and other site data." Select "See all
          cookies and site data." Use the search bar to find your app's domain.
          Click on the trash bin icon next to the relevant site to delete its
          local storage data.
        </BlackListItem>
        <BlackHr />

        <BlackListItem>
          Mozilla Firefox:
          <br />
          Mozilla Firefox: Open Firefox. Click on the three horizontal lines
          (menu) in the top-right corner. Select "Settings." Click on "Privacy &
          Security" on the left sidebar. Scroll down to "Cookies and Site Data."
          Click on "Manage Data." Use the search bar to find your app's domain.
          Select the site and click "Remove Selected."
        </BlackListItem>
        <BlackHr />

        <BlackListItem>
          Microsoft Edge:
          <br />
          Open Edge. Click on the three horizontal dots (menu) in the top-right
          corner. Select "Settings." Click on "Cookies and site permissions" on
          the left sidebar. Click on "Manage and delete cookies and site data."
          Click on "See all cookies and site data." Use the search bar to find
          your app's domain. Click on the trash bin icon next to the relevant
          site to delete its local storage data.
        </BlackListItem>
        <BlackHr />

        <BlackListItem>
          Safari (macOS):
          <br />
          Open Safari. Click on "Safari" in the top menu bar. Select
          "Preferences." Go to the "Privacy" tab. Click on "Manage Website
          Data." Use the search bar to find your app's domain. Select the site
          and click "Remove."
        </BlackListItem>
        <BlackHr />

        <BlackListItem>
          Safari (iOS):
          <br />
          Open the Settings app. Scroll down and select "Safari." Scroll down
          and tap "Advanced." Tap "Website Data." Use the search bar to find
          your app's domain. Swipe left on the relevant entry and tap "Delete."
        </BlackListItem>
      </StyledUnorderedList>

      <BlackHr />
      <BlueH2> Important Note:</BlueH2>
      <Text>
        Deleting local storage data may affect your user experience on our app
        by removing saved preferences, login information, and other settings.{" "}
      </Text>
      <Text>
        Please ensure you have saved any important information before
        proceeding.
      </Text>
    </ParentDiv>
  </>
);

export default LocalStorage;
