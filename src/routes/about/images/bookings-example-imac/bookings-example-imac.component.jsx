import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";

import { Text } from "../../../../styles/p/p.styles";

import { bookingsExampleImacSrc } from "../../../../strings/image-srcs/image-srcs";
import PlaceholderImage from "../../../../assets/placeholder-image.jpeg";

const BookingsExampleImac = () => {
  const {
    isTinyScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isLargeTablet,
    isDesktop,
  } = useIsMobileDevice();

  return (
    <>
      {isTinyScreen() ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={280}
            height={210}
            PlaceholderSrc={PlaceholderImage}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}

      {isSmallScreen() ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={320}
            height={240}
            PlaceholderSrc={PlaceholderImage}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}

      {isMediumScreen() ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={360}
            height={270}
            PlaceholderSrc={PlaceholderImage}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}

      {isLargeScreen() ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={530}
            height={398}
            PlaceholderSrc={PlaceholderImage}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}

      {isLargeTablet() ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={600}
            height={450}
            PlaceholderSrc={PlaceholderImage}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}

      {isDesktop() ? (
        <LazyLoadImage
          src={bookingsExampleImacSrc}
          width={1000}
          height={750}
          PlaceholderSrc={PlaceholderImage}
          alt="Bookings Example On An Imac"
        />
      ) : null}

      <Text>tap on the image to view the full size image</Text>
    </>
  );
};

export default BookingsExampleImac;
