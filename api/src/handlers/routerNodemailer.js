require('dotenv').config();
const { ID_CLIENTE, SECRETO_DEL_CLIENTE, REFRESH_TOKEN } = process.env;
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// Configuracion para oauth 2
const oAuth2Client = new google.auth.OAuth2(
    ID_CLIENTE,
    SECRETO_DEL_CLIENTE,
  "https://developers.google.com/oauthplayground"
);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

const sendMail = async (req, res) => {
  try {
    // Crear un token de acceso válido utilizando el cliente OAuth 2.0
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        type: "OAuth2",
        user: "chambijuanjose05@gmail.com",
        clientId: ID_CLIENTE,
        clientSecret: SECRETO_DEL_CLIENTE,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "chambijuanjose05@gmail.com",
      to: "juanjosech.it@gmail.com",
      subject: "Notificación de Compra",
      html: `
        <h1>Gracias por tu compra</h1>
        <p>Has comprado los siguientes productos:</p>
        <ul>Texto de Prueba para todos los archivos</ul>
        <p>¡Esperamos que disfrutes de tu compra!</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { sendMail };