export const openEmailLink = () => {
  const email = "info@blackpoolflycruisetransfers.co.uk";

  const openEmail = (subject) => {
    window.open(`mailto:${email}?Subject=${subject}`);
  };

  return { email, openEmail };
};
