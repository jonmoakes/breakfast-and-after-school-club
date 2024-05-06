import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../../hooks/use-is-online";

import CheckConnection from "../../check-connection.component";
import PlaceholderImage from "../../../../assets/placeholder-image.jpeg";

import { Text } from "../../../../styles/p/p.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

import { addFundsPhoneSrc } from "../../../../strings/image-srcs/image-srcs";

const UserAddFundsPhone = () => {
  const { getPhoneImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getPhoneImageSizeBasedOnScreen();

  return (
    <>
      <Text>
        a user securely adds funds to a virtual wallet, which they can then use
        to book sessions.
      </Text>
      <Text>
        the wallet balance deducts with each booking until there is not enough
        remaining balance, at which point they can simply add more to their
        wallet.
      </Text>
      <Text>
        if a user cancels a booking, the their wallet balance is updated and
        your bookings table is updated in realtime.
      </Text>
      <Text>
        session spaces also update in realtime, allowing multiple users to book
        sessions all at once without worrying if there is space available or
        not!
      </Text>

      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
            <a href={addFundsPhoneSrc}>
              <LazyLoadImage
                src={addFundsPhoneSrc}
                width={imageSize.width}
                height={imageSize.height}
                placeholderSrc={PlaceholderImage}
                alt="A User Adding Funds To Their Wallet"
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

export default UserAddFundsPhone;
