import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";

import { Text } from "../../../../styles/p/p.styles";

import { bookingsExampleImacSrc } from "../../../../strings/image-srcs/image-srcs";
import PlaceholderImage from "../../../../assets/placeholder-image.jpeg";

const BookingsExampleImac = () => {
  const { getImageSizeBasedOnScreen } = useIsMobileDevice();

  const imageSize = getImageSizeBasedOnScreen();

  return (
    <>
      {imageSize ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={imageSize.width}
            height={imageSize.height}
            PlaceholderSrc={PlaceholderImage}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}
      <Text>Tap on the image to view the full-size image</Text>
    </>
  );
};

export default BookingsExampleImac;
