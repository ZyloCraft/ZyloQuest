import { WebhookClient } from "discord.js";
import ms from "ms";

export default {
    token: "", // Bot token
    selfAccountToken: "", // Discord account token used for boost/Nitro command calculation
    prefix: "-", // Bot prefix its not used in the bot
    mongoDB: "mongodb://127.0.0.1:27017/badge", // MongoDB URL
    
    rewardImages: {
        "PLACEHOLDER": "https://i.ibb.co/rRNztwKq/reward.webp", // custom reward image
    },
    
    rewardTypes: {
        5: "Nitro", // Nitro emoji reward
        3: "Discord item", // Reward types
    },
    
    whiteListedGuilds: ["1302431331854188617"], // Allowed guilds to use the bot
    
    quests: ["WATCH_VIDEO", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP", "PLAY_ACTIVITY"],
    events: ["STREAM_ON_DESKTOP", "PLAY_ON_DESKTOP", "PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX", "WATCH_VIDEO"],
    
    minQuestTime: ms("500m"),
    questsLimit: 15, // Quests limit at same time will use higher resources if increased
    logString: "Developed euiz dev & Zylo", // First log string when a quest starts
    
    notification: {
        sendDm: false, // Send DM notification
        serverid: "947363468414160916", // Server ID for the notification
        channelid: "1343344726287450112", // Channel ID for the notification
        role: "1343547598543519774", // Role ID for the notification
    },
    
    server: {
        serverid: "1302431331854188617", // Server ID where play activity quests/streams happen
        channelid: "1355707829440221285", // Voice channel ID for play activity quests/streams
        roleId: "1355709691497287932>", // Role ID required to join the voice channel
        logChannel: "1302789129951510558", // Log channel ID for the bot
        
        joinMessage: `## أنت لست داخل السيرفر
- **للاستفادة من البوت، يجب أن تنضم إلى السيرفر بالحساب الذي تريد إكمال المهمة به.**
- **ملاحظة: البوت مجاني 100%.**
            
## You are not in the server
- **To use the bot, you need to join the server with the account you want to complete the task with.**
- **Note: The bot is 100% free.**
            
- ** https://discord.gg/ru7nkKtHDa **` // Join message for the server
    },
    
    WebhookUrl: new WebhookClient({ url: "" }), // Webhook URL for image uploads
    debugMode: false, // Debug mode for the bot this allow only developers to use the bot
    videoFormats: [".mp4", ".mov", ".avi", ".mkv", ".webm"],
    developers: ["875042646316441650"], // Developer IDs for the bot
    
    withButtons: { // Buttons for the bot
        active: true,
        buttons: [
            {
                url: "https://youtu.be/eJoa4obHhng",
                emoji: "📺",
                text: "tutorial how to use",
            },
        ],
    },
};
