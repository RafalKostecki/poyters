export const cookieExtractor = req => {
  let token = null;
  console.log('req.cookies', req.cookies);
  console.log('req.cookies[0]', req.cookies[0]);
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  return token;
};