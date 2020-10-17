'use strict';

const PersonController= require("./controller/person.controller.js");
const Validations = require("./validations/person.create.validation.js");
const serverless = require('serverless-http');
const express = require('express');
const json = require('body-parser');
const app = express();


app.use(json({ strict: false }));

app.get('/people/:peopleId', PersonController.findById);

app.post("/people", Validations.validateInputs, PersonController.create);

app.get('/hello', function (req, res) {
  res.send({message: 'Hello World!'})
})

module.exports.handler = serverless(app);
