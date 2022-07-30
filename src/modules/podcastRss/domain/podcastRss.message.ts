const errorMessages = (error = null) => ({
  default: 'Error fetching podcast-rss.Error Message: State no manage.',
  403: 'Error fetching podcast-rss. Error Message: No data getted.',
  500: 'Error fetching podcast-rss. Error Message: Internal Server Error.',
  getAll: `Error fetching podcast-rss. Error Message: ${JSON.stringify(error)}.`,
  filter: `Error filtering podcast-rss. Error Message: ${JSON.stringify(error)}.`,
});

const successMessages = () => ({});

export { successMessages, errorMessages };
