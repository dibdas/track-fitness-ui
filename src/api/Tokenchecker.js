/* eslint-disable no-console */
function checkTokens() {
  const currentToken = localStorage.getItem('token');
  console.log(currentToken);
  return currentToken;
}
export default checkTokens;
