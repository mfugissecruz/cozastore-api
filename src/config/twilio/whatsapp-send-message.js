const accountSid = "AC79b7bb9b4c712a37cfd489fe73603cb2";
const authToken = "103a4fed4160de96e20d06f050702940";

const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

const sendMessage = async (message, senderID) => {
  try {
    await client.messages.create({
      to: senderID,
      body: message,
      from: `whatsapp:+15617834076`,
    });
  } catch (error) {
    console.log(`Error at sendMessage ==> ${error}`);
  }
};

module.exports = { sendMessage };
