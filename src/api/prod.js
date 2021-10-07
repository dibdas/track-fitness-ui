/* eslint-disable camelcase */
function config_url() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://pure-coast-29322.herokuapp.com';
  }

  return 'http://localhost:3000';
}
export default config_url;
