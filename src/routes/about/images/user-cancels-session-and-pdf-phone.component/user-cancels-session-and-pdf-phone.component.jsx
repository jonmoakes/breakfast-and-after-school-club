import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../../hooks/use-is-online";

import CheckConnection from "../../check-connection.component";
import PlaceholderImage from "../../../../assets/placeholder-image.jpeg";

import { Text } from "../../../../styles/p/p.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

import {
  userChoosesSessionToCancelPhoneSrc,
  sessionCancellationDetailsPhoneSrc,
  pdfPhoneSrc,
} from "../../../../strings/image-srcs/image-srcs";

const UserCancelsSessionAndPdfPhone = () => {
  const { getPhoneImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getPhoneImageSizeBasedOnScreen();

  return (
    <>
      <Text>
        a user sees their bookings in their table. tapping on the box to the
        left of the booking allows them to cancel it, or download a pdf for
        their records.
      </Text>
      <Text>
        to cancel, they simply tap the cancel button and after confirming, funds
        are readded to their virtual wallet and the session spaces in your
        database are updated.
      </Text>
      <Text>
        in both and your and their session bookings table, the cancelled booking
        is removed from view.
      </Text>
      <Text>no more paperwork needed!</Text>
      <Text>
        to download a PDF, they simply tap the PDF button and can instantly
        download a pdf of their booked session.
      </Text>
      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
            <>
              <a href={userChoosesSessionToCancelPhoneSrc}>
                <LazyLoadImage
                  src={userChoosesSessionToCancelPhoneSrc}
                  width={imageSize.width}
                  height={imageSize.height}
                  placeholderSrc={PlaceholderImage}
                  effect="blur"
                  alt="User Chooses A Session To Cancel"
                />
              </a>

              <BlackHr />
              <a href={sessionCancellationDetailsPhoneSrc}>
                <LazyLoadImage
                  src={sessionCancellationDetailsPhoneSrc}
                  width={imageSize.width}
                  height={imageSize.height}
                  placeholderSrc={PlaceholderImage}
                  effect="blur"
                  alt="Details Of The Session To Be Cancelled"
                />
              </a>

              <BlackHr />
              <a href={pdfPhoneSrc}>
                <LazyLoadImage
                  src={pdfPhoneSrc}
                  width={imageSize.width}
                  height={imageSize.height}
                  placeholderSrc={PlaceholderImage}
                  effect="blur"
                  alt="A PDF Of The Users Booking For Their Records"
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

export default UserCancelsSessionAndPdfPhone;
