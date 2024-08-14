module.exports = {
    config: {
        name: "call",
        role: 0,
        author: "Micazhla",
        longDescription: "Not a command!"
    },
    onStart: async function ({ message }) {
        message.send("This is not a command.")
    },
    onChat: async function ({ message, api, event }) {
        const { body, senderID, messageID, threadID } = event;
        
        if (body.toLowerCase() === "xavian") {
            api.setMessageReaction("👍", messageID, () => {}, true);
            message.reply("kiss you?");
            setTimeout (() => {
                message.send("Nah.")
            }, 3000)
        }
    }
};