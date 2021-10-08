/* eslint-disable no-console */
function checkTokens() {
  const currentToken = localStorage.getItem('token');
  return currentToken;
}
export default checkTokens;
