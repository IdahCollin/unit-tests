// Klar

export const hashtags = (text) => {
  const regex = /#[a-zA-Z0-9]+/g; // Regular expression to match hashtags
  return text.match(regex) || []; // Extract hashtags using match() and return them or an empty array
}
