import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../../hooks/use-is-online";

import CheckConnection from "../../check-connection.component";
import PlaceholderImage from "../../../../assets/placeholder-image.jpeg";

import { Text } from "../../../../styles/p/p.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../../styles/h2/h2.styles";
import { ParentDiv } from "../../../../styles/div/div.styles";

import {
  databaseAdminImacSrc,
  addBookingImacSrc,
} from "../../../../strings/image-srcs/image-srcs";

const DatabaseAdminImac = () => {
  const { getImacImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getImacImageSizeBasedOnScreen();

  return (
    <ParentDiv>
      <BlueH2>manually add a booking:</BlueH2>
      <Text>have a parent who doesn't use the app?</Text>
      <Text>you can still make it easier for yourself!</Text>
      <Text>
        rather than writing everything down on paper, you can manually add a
        booking to your database with just a few details.
      </Text>
      <Text>
        you can also update your session times, prices and more in just a few
        clicks!
      </Text>
      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
            <>
              <a href={databaseAdminImacSrc}>
                <LazyLoadImage
                  src={databaseAdminImacSrc}
                  width={imageSize.width}
                  height={imageSize.height}
                  placeholderSrc={PlaceholderImage}
                  effect="blur"
                  alt="Database Admin On An Imac"
                />
              </a>

              <BlackHr />
              <a href={addBookingImacSrc}>
                <LazyLoadImage
                  src={addBookingImacSrc}
                  width={imageSize.width}
                  height={imageSize.height}
                  placeholderSrc={PlaceholderImage}
                  effect="blur"
                  alt="Adding A Booking On An Imac"
                />
              </a>
            </>
          ) : null}
        </>
      ) : (
        <CheckConnection />
      )}
    </ParentDiv>
  );
};

export default DatabaseAdminImac;
