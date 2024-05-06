import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../../hooks/use-is-online";

import CheckConnection from "../../check-connection.component";
import PlaceholderImage from "../../../../assets/placeholder-image.jpeg";

import { Text } from "../../../../styles/p/p.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

import {
  userChoosesDatePhoneSrc,
  userConfirmsSessionPhoneSrc,
} from "../../../../strings/image-srcs/image-srcs";

const UserBooksSessionPhone = () => {
  const { getPhoneImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getPhoneImageSizeBasedOnScreen();

  return (
    <>
      <Text>
        a user chooses the date of the session they want, and sees the number of
        sessions available ( updated in realtime ).
      </Text>
      <Text>
        they choose the session they want - dependent on their balance they have
        available.
      </Text>
      <Text>
        if they don't have enough in their balance for a certain session, the
        button to book will not show, stopping any possibility of a user being
        'overdrawn'.
      </Text>
      <Text>
        once they confirm, the funds are deducted from the wallet and sent on
        their way to you!
      </Text>
      <Text>
        both the user and the app admin will see the newly created session in
        their respective booking tables.
      </Text>
      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
            <>
              <a href={userChoosesDatePhoneSrc}>
                <LazyLoadImage
                  src={userChoosesDatePhoneSrc}
                  width={imageSize.width}
                  height={imageSize.height}
                  placeholderSrc={PlaceholderImage}
                  effect="blur"
                  alt="User Chooses A Date For Their Session"
                />
              </a>

              <BlackHr />
              <a href={userConfirmsSessionPhoneSrc}>
                <LazyLoadImage
                  src={userConfirmsSessionPhoneSrc}
                  width={imageSize.width}
                  height={imageSize.height}
                  placeholderSrc={PlaceholderImage}
                  effect="blur"
                  alt="User Confirms Their Session Booking"
                />
              </a>
            </>
          ) : null}
        </>
      ) : (
        <CheckConnection />
      )}
    </>
  );
};

export default UserBooksSessionPhone;
