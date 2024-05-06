import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../../hooks/use-is-online";

import CheckConnection from "../../check-connection.component";
import PlaceholderImage from "../../../../assets/placeholder-image.jpeg";

import { Text } from "../../../../styles/p/p.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

import { databaseAdminImacSrc } from "../../../../strings/image-srcs/image-srcs";

const DatabaseAdminImac = () => {
  const { getImacImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getImacImageSizeBasedOnScreen();

  return (
    <>
      <Text>
        manually add a booking for a user who doesn't use the app, or update
        your session times, prices and more in just a few clicks!
      </Text>
      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
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
          ) : null}
        </>
      ) : (
        <CheckConnection />
      )}
    </>
  );
};

export default DatabaseAdminImac;
