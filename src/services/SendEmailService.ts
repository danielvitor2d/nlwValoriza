const nodemailer = require('nodemailer');
const { google } = require('googleapis');

export async function send({ tag, message, name_sender, receiver_email }) {
  const CLIENT_ID = '';
  const CLIENT_SECRET = '';
  const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  const REFRESH_TOKEN = '';

  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  const accessToken = await oAuth2Client.getAccessToken();
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'your-email@something',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken
    }
  });

  await transport.sendMail({
    from: "NLW Together <your-email@something>",
    to: [receiver_email],
    subject: "You received a compliment!",
    text: `${name_sender} just sent you a compliment, check there.\n Tag: ${tag}\n Message: ${message}\n`
  });
}