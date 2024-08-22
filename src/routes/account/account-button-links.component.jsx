import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { useEffect, useState } from "react";

const AccountButtonLinks = () => {
  const { id, appOwnerId } = useGetCurrentUserSelectors();
  const { appOwnerButtons, notAppOwnerButtons } = useNavigateToRoute();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  console.log(deferredPrompt, isInstallable);
  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      // Clear the deferredPrompt since it can only be used once
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event so it can be triggered later
      setDeferredPrompt(e);
      // Update UI to notify the user they can install the PWA
      setIsInstallable(true);
    };

    // Listen for the beforeinstallprompt event
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return (
    <>
      {id === appOwnerId ? (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: appOwnerButtons }} />
        </ParentDiv>
      ) : (
        <ParentDiv>
          <BlueH2>what would you like to do?</BlueH2>
          <RenderButtonsList {...{ buttons: notAppOwnerButtons }} />
        </ParentDiv>
      )}
      {!isInstallable ? null : (
        <button onClick={handleInstallClick} className="install-button">
          Install App
        </button>
      )}
    </>
  );
};

export default AccountButtonLinks;
