const speakeasy = require("speakeasy");
const fs = require("fs-extra");

// Pega token da linha de comando
let secret = fs.readJsonSync("data/secret.json");

// Lê segredo guardado no JSON
let token = process.argv[2];

// Confere se o token e o segredo batem
let verified = speakeasy.totp.verify({
    "secret": secret,
    "encoding": "base32",
    "token": token
});

console.log(token, verified);
