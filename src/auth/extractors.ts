export const cookieExtractor = req => {
  let token = null;
  console.log('req.cookies', req.cookies);
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  return token;
};