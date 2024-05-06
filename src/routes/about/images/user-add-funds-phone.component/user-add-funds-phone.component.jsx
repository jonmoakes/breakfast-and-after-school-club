import { LazyLoadImage } from "react-lazy-load-image-component";

import useIsMobileDevice from "../../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../../hooks/use-is-online";

import CheckConnection from "../../check-connection.component";
import PlaceholderImage from "../../../../assets/placeholder.jpg";

import { Text } from "../../../../styles/p/p.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../../styles/h2/h2.styles";
import { ParentDiv } from "../../../../styles/div/div.styles";

import { addFundsPhoneSrc } from "../../../../strings/image-srcs/image-srcs";

const UserAddFundsPhone = () => {
  const { getPhoneImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getPhoneImageSizeBasedOnScreen();

  return (
    <ParentDiv>
      <BlueH2>the virtual wallet:</BlueH2>
      <Text>
        the user securely adds funds to a 'virtual wallet', which they can then
        use to book sessions.
      </Text>
      <Text>you receive the money they add directly into your account.</Text>
      <Text>
        the wallet balance deducts with each booking until there is not enough
        remaining balance, at which point they can simply add more to their
        wallet.
      </Text>
      <Text>
        if a user cancels a booking, their wallet balance is updated and your
        bookings table is updated in realtime.
      </Text>
      <Text>
        session spaces also update in realtime, allowing multiple users to book
        sessions all at once without worrying if there is space available or
        not!
      </Text>

      <Text>
        our payment processor is powered by stripe, who are one of the biggest
        companies in the e-commerce world!
      </Text>

      <Text>
        For you peace of mind, read more about{" "}
        <a className="red" href="https://stripe.com/gb">
          Stripe
        </a>
        .
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
    </ParentDiv>
  );
};

export default UserAddFundsPhone;
