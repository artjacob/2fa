const speakeasy = require("speakeasy");
const QRCode = require("qrcode");
const fs = require("fs-extra");

// Gera segredo
let secret = speakeasy.generateSecret({ "name": "Nome do serviço" });

// Gera QR Code
QRCode.toFile("data/qrcode.png", secret["otpauth_url"]);

// Salva segredo num JSON
fs.outputJsonSync("data/secret.json", secret["base32"]);

console.log(secret);
