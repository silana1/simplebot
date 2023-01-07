let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
╭══〘 ʙᴏʙɪᴢ ʙᴏᴛ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨salam, ${taguser} :D*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡☺☺☺☺☺╞══╯
┏━━━━━━━━━━━━━┓
┃ *< Menu >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣  _a_
┣  _${usedPrefix}logos_
┣  _${usedPrefix}on welcome_
┣  _${usedPrefix}off welcome_
┣  _${usedPrefix}ig *[url]*_
┣  _${usedPrefix}mediafire *[url]*_
┣  _${usedPrefix}tiktok *[url]*_
┣  _${usedPrefix}sticker *[url]*_
┣  _${usedPrefix}attp *[text]*_
┣  _${usedPrefix}attp2 *[text]*_
┣  _${usedPrefix}attp3 *[text]*_
┣  _${usedPrefix}ttp *[text]*_
┣  _${usedPrefix}ttp2 *[text]*_
┣  _${usedPrefix}ttp3 *[text]*_
┣  _${usedPrefix}ttp4 *[text]*_
┣  _${usedPrefix}ttp5 *[text]*_
┣  _${usedPrefix}wikipedia *[text]*_
┣  _${usedPrefix}google *[text]*_
┣  _${usedPrefix}imagen *[text]*_
┣  _${usedPrefix}play *[texto]*_
┣  _${usedPrefix}play2 *[text]*_
┣  _${usedPrefix}play3 *[text]*_
┣  _${usedPrefix}invocar *[text]*_
┣  _${usedPrefix}ytsearch *[text]*_
┣  _${usedPrefix}getaud *[url]*_
┣  _${usedPrefix}getvid *[url]*_
┣  _${usedPrefix}ytmp3 *[url]*_
┣  _${usedPrefix}ytmp4 *[url]*_
┣  _${usedPrefix}tts *[lenguaje] [texto]*_
┣  _${usedPrefix}toimg *[sticker]*_
┣  _${usedPrefix}sticker *[image]*_
┣  _${usedPrefix}tourl *[image]*_
┣  _${usedPrefix}tourl *[video]*_
┣  _${usedPrefix}tourl *[audio]*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *< OWNER >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣  _${usedPrefix}update_
┣  _${usedPrefix}banchat_
┣  _${usedPrefix}unbanchat_
┗━━━━━━━━━━━━━┛
`.trim()
let buttons = [
{ buttonId: '#owner', buttonText: { displayText: '💫 mol lbot 💫' }, type: 1 },
{ buttonId: '#runtime', buttonText: { displayText: '⏰ youtube ⏰' }, type: 1 },
{ buttonId: '#infohost', buttonText: { displayText: '👑 instagram 👑' }, type: 1 }]
let buttonMessage = {
video: fs.readFileSync('./bobiz.mp4'),
caption: menu.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑  ʙᴏʙɪᴢ ʙᴏᴛ 👑',
body: null,
thumbnail: fs.readFileSync('./src/Menu2.jpg'),
sourceUrl: `https://www.instagram.com/noureddine_ouafy`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
