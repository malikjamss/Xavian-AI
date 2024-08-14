module.exports = {
  config: {
    name: "pababy",
    role: 0,
    author: "Micazhla",
    longDescription: "Pababy ka sa bot"
  },
  onStart: async function ({ message }) {
    message.send("This is not a command.");
  },
  onChat: async function ({ api, event, message, usersData, role }) {
    const { body, senderID, threadID } = event;
    const sadMessages = ["☹️", ":(", ":<", ";(", "😞", "😭", "😢", "i'm sad", "huhu", "(⁠╥⁠﹏⁠╥⁠)"];
    const isSadMessage = sadMessages.some(sadMessage => body.toLowerCase().includes(sadMessage));

    if (isSadMessage) {
      if (senderID === "61557494398506") {
        message.reply("Why is my princess sad?");
        setTimeout(() => {
          message.send("Want me to kiss you so you won't be sad anymore?");
        }, 2500);
      } else {
        message.reply("Gusto mo baby kita?");
        setTimeout(() => {
          message.send("Sorry, but si micazhla lang bini-baby ko.");
        }, 2500);
      }
    }
  }
};