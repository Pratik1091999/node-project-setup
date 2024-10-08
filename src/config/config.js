require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });


// config.js
module.exports = {
  app: {
    port: process.env.PORT,
    cors_origin: process.env.CORS_ORIGIN,
  },
  db: {
    database_url: process.env.DB_URL,
    database_name: process.env.DB_NAME,
  },
  auth: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_expiresin: process.env.JWT_EXPIRES_IN,
    saltRounds: process.env.SALT_ROUND,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    refresh_token_expiresin: process.env.REFRESH_TOKEN_EXPIRES_IN,
  },
  sendgrid: {
    api_key: process.env.SEND_GRID_API_KEY,
    api_user: process.env.USERNAME,
    from_email: process.env.FROM_EMAIL || "alaa.mezian.mail@gmail.com",
  },
};
