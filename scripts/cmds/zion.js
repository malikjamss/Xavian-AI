const axios = require('axios');

const GPT_API_URL = 'https://sandipapi.onrender.com/gpt';
const PREFIXES = ['zion', 'bot', 'mica'];

module.exports = {
  config: {
    name: "zion",
    version: 1.0,
    author: "aminulsordar api by lance",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {
    // Initialization logic if needed
  },
  onChat: async function ({ api, event, args, message }) {
    try {
      const prefix = PREFIXES.find((p) => event.body && event.body.toLowerCase().startsWith(p));

      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }

      const prompt = event.body.substring(prefix.length).trim();

      if (!prompt) {
        const randomMsg = ["Hello, how may I help you today?", "Provide a prompt please!", "How may I help?"];
        const randomIndex = Math.floor(Math.random() * randomMsg.length);
        const randomPath = randomMsg[randomIndex]
        await message.reply(randomPath);
        return;
      }

      const answer = await getGPTResponse(prompt);

      // Adding header to the answer
      await message.reply(`${answer}`);
    } catch (error) {
      console.error("Error:", error.message);
      // Additional error handling if needed
    }
  }
};

async function getGPTResponse(prompt) {
  // Implement caching logic here

  const response = await axios.get(`${GPT_API_URL}?prompt=${encodeURIComponent(prompt)}`);
  return response.data.answer;
      }