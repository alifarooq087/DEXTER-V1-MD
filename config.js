const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923006586907'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'alifarooqahmad@gmail.com'
global.github = 'https://github.com/alifarooq087/DEXTER-V1-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "923006586907"
global.devs = '923006586907';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hIOGZOM0dmeUtLZTd3SlF0b1k3Y1pjak5MNFRheGZjOC9QemNrcDkyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2dRVVk2MjBrUzJ1S2dZSUd0ckx4ZWIrZnJJTDJNdzE2amFoenkyMTJndz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TjVvZzNWaUs5M2JpTm5vS1UxNlkxWG1sL3l2NHQ2aFp4ZHhmM0wvQUVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWOG4ydS9UYXNmU0FHY0hWTTVhSXJnOWo0bmtHMk9KRW9jSEgvYU1xVFJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIN0UwYXJ0UDBVdEhCcmFUV0k2QVVEbHFsdnBPL05heUVBd2NjZFZFbnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldWRCtlZGdZNlozK3pENmJkZ0x3QzRmcFJ2U2NaQVpLNnl4bW0zUG5jWGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JoQklFaHZTS2VHVk1pRUtSZVljN0JDdGxlQzJxMkZHL2pTc1Vaallucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMllpWU9KSHVxYWR0TmVUKzlXNzQzQi90SEUwZkhNbmttdENoUGY0RWFTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1kejZtZVV5SlBMZVlraTRJbUJzYkRtMmdkRmgrY0Jma1JqdnRiUkl5UldhQ1gvQ2N3UlFQMTVLcFdPdmN4cVB2dHhOMFFrYVJneFVjMkNrc2RiZkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJ4RHEzb0JrTTZRU0FaRGgrU0VBaytySWRGQVJzdkljREEyZVJJL3lEZHNvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOaFBYbm93ZVM1dUI2b1ZQc2gyOXh3IiwicGhvbmVJZCI6ImIxNWUyMDZlLWQ4ZjUtNGYyNi1iMmRmLWExYTRhOWFjN2JmMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJITTlybDhTYzBUQit4ZG1BcGphUjdmdTAwUHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNURGYklLOHEvaGk1NnJ5d3NUeXZYU2NQU2lvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJQRDQ0OFZHIiwibWUiOnsiaWQiOiI5MjMxNTY1OTgxMDM6NzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoicyDhtKLhtI/JtMmiIPCfkpQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08zczBPSUNFS3lBK3JBR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldQeGhWSzAwejdHWHkwZ3RjODdhVWk0b2YwS3hDMXQwZXh3Q0I0eWZkbWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZJZ3hnWmpxb2RNRm53d3RsTVl4dURBNmpaalY2amg4QTJIajZVY1dJYXFBUFZXbUZtSm45djBsZWtrTmFZVEtlOUluSUNWSzdHaUNDcXNTd2lzeEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCRFo4K0VEQkxJZW5EdnJvbWJsbFVuME1tRlBsRER4bHJydmlObjZ4OUtsMUhrZVRqZWVBaE9xa3l4REsrN3pNYXdYQldUNEMwU0kweXpDdVFESzRBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE1NjU5ODEwMzo3M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWajhZVlN0Tk0reGw4dElMWFBPMmxJdUtIOUNzUXRiZEhzY0FnZU1uM1pvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEzMjc0OTM3fQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'FAROOQ A S',
  packname:  process.env.PACK_NAME || 'MADE BY F',
  
  botname:   process.env.BOT_NAME === undefined ? "FAROOQ A S" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'FAROOQ AHMAD S' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𓂀 𝔽𝔸ℝ𝕆𝕆ℚ 𝔸 𝕊 𓂀•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
