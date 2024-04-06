export const baseUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export const detailsUrl = (id) => {
  return `https://api.coingecko.com/api/v3/coins/${id}`;
}