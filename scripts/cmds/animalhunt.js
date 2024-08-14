module.exports.config = {
        name: "animalhunt",
        version: "1.0.0",
        role: 0,
        author: "Mirai Team",
        longDescription: "Hunt animals!",
        category: "Economy",
        countdown: 3
};

module.exports.onStart = async ({ event, api }) => {
        const { threadID } = event;
        const animals = [
                { name: "Deer", emoji: "🦌" },
                { name: "Rabbit", emoji: "🐇" },
                { name: "Fox", emoji: "🦊" },
                { name: "Bear", emoji: "🐻" },
                { name: "Squirrel", emoji: "🐿️" },
                { name: "Bug", emoji: "🪳" },
                { name: "Worm", emoji: "🪱" },
                { name: "Dog", emoji: "🦮" },
                { name: "Sloth", emoji: "🦥" },
                { name: "Buffalo", emoji: "🐃" },
                { name: "Sheep", emoji: "🐑" },
                { name: "Peacock", emoji: "🦚" },
                { name: "Mosquito", emoji: "🦟" },
                { name: "Parrot", emoji: "🦜" },
                { name: "Crab", emoji: "🦀" },
                { name: "Shark", emoji: "🦈" },
                { name: "Pufferfish", emoji: "🐡" }
        ];
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        const animalEmoji = randomAnimal.emoji;

        const message = `You went hunting and caught a ${randomAnimal.name} ${animalEmoji}!`;
        api.sendMessage(message, threadID);
};