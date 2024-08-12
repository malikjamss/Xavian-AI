const moment = require('moment-timezone');

module.exports = {
    config: {
        name: "bday",
        role: 0,
        author: "Micazhla",
        longDescription: "Greet mica a birthday"
    },
    onStart: async function ({ }) {},
    onLoad: async function ({ event, threadsData, api }) {
        const checkTimeDateAndSendMessage = () => {
            const timezone = moment().tz('Asia/Manila');
            const formatTime = timezone.format('hh:mm:ss A');
            const formatDate = timezone.format('MM-DD');
            const date = '08-18';
            const time = '12:00:00 AM';

            if (formatTime === time && formatDate === date) {
                const globally = global.db.allThreadData.map(i => i.threadID);
                globally.forEach(async (global, index) => {
                    api.sendMessage(`HAPPY BIRTHDAY MICAZHLA, MY PRINCESS. 🎉🎂\nDATE: ${date}\nTIME: ${time}\n\nHappy birthday to my dearest princess, micazhla. I hope you'll enjoy and be happy today 💗.`, global);
                })
            }
        }
        const check = moment().add(1, 'minute').startOf('minute');
        const delay = check.diff(moment());
        setTimeout ((checkTimeDateAndSendMessage), delay);
    }
};