const xmpp = require("simple-xmpp");

xmpp.on("online", data => {
  console.log("Hey you're on the XMPP server");
  console.log(`Conected as ${data.jid.user}`)
  sendMessageEvery(5000);
});

xmpp.on("error", error => {
  console.log(`Something terrible happened: ${error}`);
});

xmpp.on("chat", (from, message) => {
  console.log(`Got a message: ${message} from ${from}`);
});


function sendMessageEvery(interval) {
  setInterval(() => {
    xmpp.send("user@localhost", `Hi @ ${Date.now()}`)
  }, interval);
}

xmpp.connect({
  "jid": "admin@localhost",
  "password": "password",
  "host": "localhost",
  "port": "5222"
});