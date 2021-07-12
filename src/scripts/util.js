export function getApiUrl() {
  return process.env.NODE_ENV === 'development' ?
    process.env.GATSBY_API_DEV
    : process.env.GATSBY_API_PROD;
}