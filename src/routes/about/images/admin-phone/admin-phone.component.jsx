import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../../hooks/use-is-online";

import CheckConnection from "../../check-connection.component";
import PlaceholderImage from "../../../../assets/placeholder.jpg";

import { Text } from "../../../../styles/p/p.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../../styles/h2/h2.styles";
import { ParentDiv } from "../../../../styles/div/div.styles";

import { adminPhoneSrc } from "../../../../strings/image-srcs/image-srcs";

const AdminPhone = () => {
  const { getPhoneImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getPhoneImageSizeBasedOnScreen();

  return (
    <ParentDiv>
      <BlueH2>admin dashboard:</BlueH2>
      <Text>
        take advantage of your dashboard screen to easily access any required
        data, or to manage your database.
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
    </ParentDiv>
  );
};

export default AdminPhone;
