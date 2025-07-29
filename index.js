const https = require('https');
const url = "https://f36eba1c-f488-4cfb-9ffc-2ae638082663-00-19531jp4w82ip.kirk.replit.dev/";

setInterval(() => {
  https.get(url, (res) => {
    const now = new Date().toLocaleTimeString();
    console.log(`[${now}] Ping envoyé. Status : ${res.statusCode}`);
  }).on("error", (err) => {
    console.error("Erreur de ping :", err.message);
  });
}, 60 * 1000); // toutes les 60 secondes
