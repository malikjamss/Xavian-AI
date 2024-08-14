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
                if (senderID.includes("61557494398506")) {
                    message.send("Ofc baby. <3")
                } else {
                    message.send("nah.")
                }
            }, 3000)
        }
    }
};