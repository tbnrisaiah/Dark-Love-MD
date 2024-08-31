//#ENJOY
/**

██████╗  █████╗ ██████╗ ██╗  ██╗     ██╗      ██████╗ ██╗   ██╗███████╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝     ██║     ██╔═══██╗██║   ██║██╔════╝
██║  ██║███████║██████╔╝█████╔╝█████╗██║     ██║   ██║██║   ██║█████╗  
██║  ██║██╔══██║██╔══██╗██╔═██╗╚════╝██║     ██║   ██║╚██╗ ██╔╝██╔══╝  
██████╔╝██║  ██║██║  ██║██║  ██╗     ███████╗╚██████╔╝ ╚████╔╝ ███████╗
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚══════╝ ╚═════╝   ╚═══╝  ╚══════╝
                                                                       

                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ayodejifamily299@gmail.com";
global.location = "Lagos,Awoyaya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "2348122441244@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Accra";
global.github = process.env.GITHUB || "https://github.com/ayodejibot/Dark-Love-MD.git";
global.gurl = process.env.GURL || "https://whatsapp.com/L6dT7pVhXYG9hvh3aneai2";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWrCuH35fLuVP2iCc2R";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "2348122441244";
global.sudo = process.env.SUDO || "2348122441244,255714595078";
global.owner = process.env.OWNER_NUMBER || "2347040788422";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "255714595078";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";
global.anti_delete = process.env.Anti_Delete || "true";

global.api_smd = "https://github.com/ayodejibot/SESSION-GENERATOR.Onrender.git";
global.scan = ""

global.SESSION_ID =
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExzc05hNlROUVhISmZGYk00cDBRVWwwMWNsYmI5S2NrY3hjM1dMUWMxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlhtNkFSU1JxZ1lUOTBGZDg2ZzdBRHF5WS8xYjliRGMrQTc0cEJDMVdHMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTmNXUlJjWjBjbDU0Uk9EanFHQ0lVd3h3TXplZVB0anhrTlNBQ0tKNDB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMXpWY1ZmQUhPVlc3Y1hGYXVkcUR3RHRGZDBWOTlrdDdrOWovYmFrZkZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdEVDloeHVUekxhRDRJOVl2NVBSMnJSWllyUGNjNFp5QmNEcmw4dlEra1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5ITVJ3WDMwUDRnQmdRTk56SUtUNGlDRG9xcFRFK3BjZkU2dzg1cElpd289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZrVHJrcGNqZXV3dXFsTEwzZkJmbFl3TmhHZEJBa2huMGVYS3BoR09HST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEZYZmF6aXdHSHl0d2VuVmQ0TU82dlBTeXRLdzdXMHREaFB0QnM5UGZqbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRTNWVqcDJjbUNUWW1IRVpDM0FNaUF0Z0xqOGsyS0VaRnNNS3d5eFlZbzY1NnpzVWdUVWV2WDFBQkVmTzgzampFQ2hPRnJrcUptSnJCQzhhdzRqTmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJzWlVNK0xtUlI3R2JXWG9UakhwRWdKZXRwODFMY25OdmdCcFM1R1VvVFlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItSnd4NkpqYlJuMlRCcnhLbGhhcG1RIiwicGhvbmVJZCI6IjNkNmEyZjE2LTdlODEtNDYwMS1hZTBhLWIzZDRkYzI2Y2FhOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UWlKYm5nejVTN0JNT3l2SVpyYll0TVZxMlE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjZ3cFJjaUNIQ3VPS3grMXFVV1FjbGpjVUdRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE4MVgyMUQ3IiwibWUiOnsiaWQiOiIyMzQ3MDQwNzg4NDIyOjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AyU2s1QUVFTkRYeTdZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilg3Ni9tUWZ3ZEE3ZWJRZEJKODIzL21hSU1OU1BNTlVEZ1MwS0xLTE93RDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9jT29zUHZlcFFjWjVGSzArNzNlN2R3TVg0b255ZmVCczZMd0lzZExaOE9lNm13WEQwbFdtWUpTVkg2eTNrSFRNWDVVU1VvWm15UWtIU3p1Z1p4UkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqanVkZ0k1dll0NkVDcndEM28wN2ZNR01uUjQ0TFpNYmt3UjVpWCtrNktvSU93MXFKdmhBWFZ2MTlyUEJvMnJjN2t5ekdCQmN3UW40bzdRd1BmU0ZnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDA3ODg0MjI6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWKyt2NWtIOEhRTzNtMEhRU2ZOdC81bWlERFVqekRWQTRFdENpeWl6c0EvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MDk4OTczLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5pWSJ9"
  "Put your session id here 😀"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-DARK-LOVE-𝐌𝐃-𝐕1😈",
  author: process.env.PACK_AUTHER || "DARK",
  packname: process.env.PACK_NAME || "👾",
  botname: process.env.BOT_NAME || "DARK-LOVE-𝐌𝐃-𝐕1",
  ownername: process.env.OWNER_NAME || "OG",
  errorChat: process.env.ERROR_CHAT || "2347040788422",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
