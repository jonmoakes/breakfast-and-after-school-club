import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../../hooks/use-is-online";

import CheckConnection from "../../check-connection.component";
import PlaceholderImage from "../../../../assets/placeholder-image.jpeg";

import { Text } from "../../../../styles/p/p.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

import { adminPhoneSrc } from "../../../../strings/image-srcs/image-srcs";

const AdminPhone = () => {
  const { getPhoneImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getPhoneImageSizeBasedOnScreen();

  return (
    <>
      <Text>
        take advantage of the dashboard screen to easily access any required
        data or to manage your database.
      </Text>

      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
            <a href={adminPhoneSrc}>
              <LazyLoadImage
                src={adminPhoneSrc}
                width={imageSize.width}
                height={imageSize.height}
                placeholderSrc={PlaceholderImage}
                alt="Admin Screen On A Phone"
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

export default AdminPhone;
