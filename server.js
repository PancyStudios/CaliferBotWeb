const Discord = require('discord.js')
const client = require('./index')
const express = require('express')
const { getCommands, getBotInfo } = require('./utils')
const path = require('path');
const { match } = require('assert');

	const port = process.env.PORT || 3001

	const app = express();
    const bodyParser = require("body-parser");

	app.set("view engine", "ejs");
	app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
	
	app.get("/", (req, res) => {
		const botinfo = getBotInfo()
		console.log(req.hostname)
		console.log(req.ip) 
		res
		   .status(200)
		   .render('LandigPage', {botinfo})


	})
	app.get("/dashboard", (req, res) => {
		res
		.status(403)
		.render('dashboardLanding')
	})

	app.get('/info', (req, res) => {
		res
		   .status(200)
		   .send(Detalles)
	})

	app.get('/icon', (req, res) => {
		res.sendFile(path.join(__dirname, '/icon.webp'));
	})
	app.get('/prueba', (req, res) => {
		const botinfo = getBotInfo()
		res
		   .status(200)
		   .render('LandigPage', {botinfo})
	})

	app.get("/commands", (req, res) => {
		const commands = getCommands();
		res
		   .status(200)
		   .render('commands', {commands})
	})

	app.get("*", (req, res) => {
		res
		   .status(404)
		   .render('ErrorPage')
	})

	app.post("/logs", (req, res) => {
		const Payload = req.body;
		try {
			if(!Payload.id) return res.sendStatus(404)
			if(!Payload.data) return res.sendStatus(404)
			if(!Payload.actor) return res.sendStatus(404)
			if(!Payload.data.app) return res.sendStatus(404)
			if(!Payload.data.app.id) return res.sendStatus(404)
			if(!Payload.actor.id) return res.sendStatus(404)
			if(Payload.data.app.id !== "fbaebb85-6f13-4d6c-ad6c-80179867f882") {
				console.log(`La ip ${req.ip} no esta autorizada para entrar a este sitio`)
				return res.sendStatus(403)
			} else {
				if(Payload.data.actor.id !== "1030c06a-bcbe-4738-9134-89af5c717fb1" || Payload.data.actor.id !== "e9530782-5868-4713-8128-857e1792aa52"){
					console.log(`La ip ${req.ip} no esta autorizada para user el evento post`)
					return res.sendStatus(403)
				} else {
					console.log(Payload) 
					return res.sendStatus(200)
				}
			}
		} catch (err) {
			res
				.send(err)
				.status(500)
		}


	});

    app.listen(3000 || 3001, () => {
        console.log('Servidor Listo.');
    });