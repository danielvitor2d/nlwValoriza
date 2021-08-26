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
      user: 'ripsea.rpg321@gmail.com',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken
    }
  });

  await transport.sendMail({
    from: "NLW Together <ripsea.rpg321@gmail.com>",
    to: [receiver_email],
    subject: "Você recebeu um elogio!",
    text: `${name_sender} acabou de te enviar um elogio, checa aí.\n Tag: ${tag}\n Mensagem: ${message}\n`
  });
}