import express, { json } from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import fs from "fs";

import { error, log } from "console";


const app = express();

app.use(express.json());

function sendFile(req,res) {
console.log('We get request!!!t')
}

app.post("/saveFile", (req, res) => sendFile(req, res));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
