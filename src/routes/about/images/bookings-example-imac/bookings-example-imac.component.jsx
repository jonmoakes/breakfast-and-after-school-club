import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../../hooks/use-is-online";

import CheckConnection from "../../check-connection.component";
import PlaceholderImage from "../../../../assets/placeholder-image.jpeg";

import { BlueH2 } from "../../../../styles/h2/h2.styles";
import { Text } from "../../../../styles/p/p.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import { ParentDiv } from "../../../../styles/div/div.styles";

import { bookingsExampleImacSrc } from "../../../../strings/image-srcs/image-srcs";

const BookingsExampleImac = () => {
  const { getImacImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getImacImageSizeBasedOnScreen();

  return (
    <ParentDiv>
      <BlueH2>viewing your bookings:</BlueH2>

      <Text>all bookings can be seen in a centralised table.</Text>

      <Text>
        you can filter bookings by a search term, or call or email a parent at
        the touch of a button!
      </Text>
      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
            <a href={bookingsExampleImacSrc}>
              <LazyLoadImage
                src={bookingsExampleImacSrc}
                width={imageSize.width}
                height={imageSize.height}
                placeholderSrc={PlaceholderImage}
                alt="Bookings Example On An Imac"
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

export default BookingsExampleImac;
