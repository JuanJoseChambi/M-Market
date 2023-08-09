require("dotenv").config();
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
  const { name, image, price, description } = req.body;
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
      from: "MMarket <chambijuanjose05@gmail.com>",
      to: "juanjosech.it@gmail.com",
      subject: "MMarket | Compra Realizada",
      html: `
      <html>
      <head>
        <style>
        .TitleNotification {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 90%;
          height: 65px;
          background-color: #ff8000;
          border-radius: 20px 20px 0 0;
          border: 1px solid #0000003a;
          padding: 0 20px;
        }
        .BodyNotification{
          display:inline-block;
          width: 90%;
          min-height: 50vh;
          border-radius: 0px 0px 20px 20px;
          border: 1px solid #0000003a;
          padding: 20px;
        }
        .CardBought{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          width: 30%;
          height: 80px;
          border: 1px solid #0000003a;
          border-radius: 10px;
          user-select: none;
          margin: 20px 0;
          padding: 15px;
        }
        .ContainerImagen{
          display: flex;
          justify-content: center;
          align-items: center;
          width:25%;
          height:80px;
          background-color: #ffffff;
          border-radius: 10px 0 0 10px;
        }
        .Imagen{
          width: 100%;
          border-radius: 10px 0 0 10px;
        }
        .ContainerInfo{
          width:75%;
          display:inline-block;
          background-color: #ffffff;
          border-radius: 0px 10px 10px 0;
        }
        .h3Info{
          font-size:15px;
          margin:0;
        }
        .pInfo{
          font-size:12px;
          margin:0;
        }
        .message {
          font-style: italic;
          color: #555;
        }
        
        </style>
      </head>
      <body>
        <div class="TitleNotification">
          <h1 class="h1Title">Gracias por tu compra</h1>
        </div>
        <div class="BodyNotification">
          <h3 class="pText">El pago de los siguientes productos se han Realizado:</h3>
          <div class="CardBought">
            <div class="ContainerImagen">
              <img class="Imagen" src=${image} alt="Imagen">
            </div>
            <div class="ContainerInfo">
              <h3 class="h3Info">${name} <br/></h3>
              <p class="pInfo">$ ${price} </br></p>
              <p class="pInfo">${description}</p>
            </div>
          </div>
          <p class="message">¡Desde MMarket esperamos que disfrutes de tu compra!</p>
        </div>
      </body>
    </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
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
      to: "chambijuanjose05@gmail.com",
      subject: "MMarket | Compra Realizada",
      html: `
      <html>
      <head>
        <style>
      
        </style>
      </head>
      <body>
        <div class="TitleNotification">
          <h1 class="h1Title">Gracias por tu compra</h1>
        </div>
        <div class="BodyNotification">
          <h3 class="pText">El pago de los siguientes productos se han Realizado:</h3>
          <div class="CardBought">
            <div class="ContainerImagen">
              <img class="Imagen" src=${image} alt="Imagen">
            </div>
            <div class="ContainerInfo">
              <h3 class="h3Info">${name} <br/></h3>
              <p class="pInfo">$ ${price} </br></p>
              <p class="pInfo">${description}</p>
            </div>
          </div>
          <p class="message">¡Desde MMarket esperamos que disfrutes de tu compra!</p>
        </div>
      </body>
    </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { sendMail, register };
