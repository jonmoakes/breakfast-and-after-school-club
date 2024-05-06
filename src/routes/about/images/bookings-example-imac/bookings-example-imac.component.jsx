import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";

import { Text } from "../../../../styles/p/p.styles";

import { bookingsExampleImacSrc } from "../../../../strings/image-srcs/image-srcs";

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
      <Text>tap on the image to view the full size image</Text>
      {isTinyScreen() ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={280}
            height={190}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}

      {isSmallScreen() ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={320}
            height={210}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}

      {isMediumScreen() ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={360}
            height={220}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}

      {isLargeScreen() ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={530}
            height={350}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}

      {isLargeTablet() ? (
        <a href={bookingsExampleImacSrc}>
          <LazyLoadImage
            src={bookingsExampleImacSrc}
            width={600}
            height={400}
            alt="Bookings Example On An Imac"
          />
        </a>
      ) : null}

      {isDesktop() ? (
        <LazyLoadImage
          src={bookingsExampleImacSrc}
          width={1000}
          height={700}
          alt="Bookings Example On An Imac"
        />
      ) : null}
    </>
  );
};

export default BookingsExampleImac;
