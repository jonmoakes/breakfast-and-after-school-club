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
  userChoosesSessionToCancelPhoneSrc,
  sessionCancellationDetailsPhoneSrc,
  pdfPhoneSrc,
} from "../../../../strings/image-srcs/image-srcs";

const UserCancelsSessionAndPdfPhone = () => {
  const { getPhoneImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getPhoneImageSizeBasedOnScreen();

  return (
    <ParentDiv>
      <BlueH2>cancelling a booking:</BlueH2>
      <Text>
        In their bookings table, a user taps on the box to the left of a booking
        that they want to cancel.
      </Text>
      <Text>
        they then simply tap the cancel icon and after confirming, funds are
        re-added to their virtual wallet and the session spaces in your database
        are updated.
      </Text>
      <Text>
        in your session bookings table and theirs, the cancelled booking is
        removed from view.
      </Text>
      <Text>no more paperwork needed!</Text>

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

              <BlueH2>downloading a PDF:</BlueH2>
              <Text>
                by tapping the box next to a booking, a user can also download a
                PDF for their records. they simply tap the icon and can
                instantly download a PDF with details of their booked session.
              </Text>

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
    </ParentDiv>
  );
};

export default UserCancelsSessionAndPdfPhone;
