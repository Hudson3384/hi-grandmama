const { Client, LocalAuth } = require("whatsapp-web.js");
const schedule = require("node-schedule");
const qrcode = require("qrcode-terminal");
const wwebVersion = "2.2412.54";

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox"],
  },
  webVersionCache: {
    type: "remote",
    remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
  },
});

const emojis = ["❤️", "🥰", "🤗", "😇", "🤠", "❤️", "🥰", "🤗", "😇", "🤠"];

/*
const tags = [
  "jesus%20bom%20dia%20cafe%20cute%20love",
  "boa%20tarde%20cachorro%20fofo",
  "boa%20noite%20travesseiro%20%dormir%20anjinho",
];
 * @TODO - next task - add gifs on the code
 * https://api.giphy.com/v1/tags/related/bom%20dia%20jesus%20cafe?api_key=
 * const gif = `https://api.giphy.com/v1/tags/related?api_key=${process.env.GITKEY}&tags=`;
 */

const cuteMessages = {
  morning: "Bom dia, vó 🌞",
  afternoon: "Boa tarde, vó 😎",
  night: "Boa noite, vó 🌃",
};

const emojiSorted = () => {
  return emojis[Math.floor(Math.random() * 10)];
};

client.on("qr", (qr) => {
  console.log("QR RECEIVED");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");

  schedule.scheduleJob("0 30 8 * * *", () => {
    console.log("Sending message at 8:30am");
    client.sendMessage(
      `${process.env.GRANDMANUMBER}@c.us`,
      `${cuteMessages["morning"]}${emojiSorted()}`
    );
  });

  schedule.scheduleJob("0 00 12 * * *", () => {
    console.log("Sending message at 12:00pm");
    client.sendMessage(
      `${process.env.GRANDMANUMBER}@c.us`,
      `${cuteMessages["afternoon"]}${emojiSorted()}`
    );
  });

  schedule.scheduleJob("0 0 18 * * *", () => {
    console.log("Sending message at 18:00pm");
    client.sendMessage(
      `${process.env.GRANDMANUMBER}@c.us`,
      `${cuteMessages["night"]}${emojiSorted()}`
    );
  });
});

client.initialize();
