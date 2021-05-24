const { Client, Collection } = require("discord.js");
const client = (global.client = new Client());
const settings = require("./src/configs/settings.json");
client.commands = new Collection();
client.aliases = new Collection();
client.invites = new Collection();
client.cooldown = new Map();
client.ranks = [
  { role: "845981427249446932", coin: 250 },
  { role: "845981425340514324", coin: 500 },
  { role: "845981423118450698", coin: 800 },
  { role: "845981420857196565", coin: 1000 },

  { role: "845980655241658388", coin: 1300 },
  { role: "845980654440153088", coin: 1500 },
  { role: "845980653577043975", coin: 1750 },
  { role: "845980652335398932", coin: 2000 },

  { role: "845978726494896149", coin: 2500 },
  { role: "845978725178408980", coin: 2750 },
  { role: "845978723843964948", coin: 3250 },
  { role: "845978722854109194", coin: 4000 },

  { role: "845975058559139860", coin: 4500 },
  { role: "845975057221943296", coin: 5250 },
  { role: "845978721777221633", coin: 6000 },
  { role: "845975057876385812", coin: 8000 },
  { role: "845975056390684692", coin: 9000 },

  { role: "845975051085807636", coin: 12500 },
  { role: "845980646324568125", coin: 15000 },
  { role: "845975052758810644", coin: 20000 },
  { role: "845975053304987648", coin: 25000 },
  { role: "845975054843641866", coin: 30000 },
  ];
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);

client.on("ready", async () => {
  client.user.setPresence({ activity: { name: "Sander Officer" }, status: "idle" });
  let botVoiceChannel = client.channels.cache.get("846003068843589672");
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});  

client
  .login(settings.token)
  .then(() => console.log("[BOT] Bot connected!"))
  .catch(() => console.log("[BOT] Bot can't connected!"));
