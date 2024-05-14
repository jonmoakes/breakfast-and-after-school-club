export const generateUniqueId = (length) => {
  const allowedCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const seenChars = new Set(); // Track seen characters for uniqueness

  while (result.length < length) {
    const char = allowedCharacters.charAt(
      Math.floor(Math.random() * allowedCharacters.length)
    );

    // Ensure uniqueness within the generated ID (avoids immediate duplicates)
    if (!seenChars.has(char)) {
      seenChars.add(char);
      result += char;
    }
  }

  return result;
};
