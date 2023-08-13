const { sendMail } = require("../routerNodemailer")
const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-4444724627234549-080912-61296035e399fa084d317fea3d9fd490-1445922728",
});


const payHandler = async (req, res) => {

    

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:5173/",
			"failure": "http://localhost:5173/",
			"pending": ""
		},
		auto_return: "approved",
	
		
	};

	// mercadopago.preferences.create(preference)
	// 	.then(function (response) {
	// 		res.json({
	// 			id: response.body.id
	// 		});
	// 	}).catch(function (error) {
	// 		console.log(error);
	// 	});
	try {
		const response = await mercadopago.preferences.create(preference);
		const preferenceId = response.body.id;
		await sendMail({ name: req.body.description, price: req.body.price, quantity: req.body.quantity, email: req.body.email});
		res.json({ id: preferenceId });
	  } catch (error) {
		console.error("Error:", error);
		res.status(500).json({ message: "Error en el proceso de compra" });
	  }
}

module.exports= payHandler