let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
╭══〘 ʙᴏʙɪᴢ ʙᴏᴛ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *salam 3alikom* , ${taguser} :D*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡☺☺☺☺☺╞══╯
┏━━━━━━━━━━━━━┓
┃ *< Menu >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣  _${usedPrefix}logos_
┣  _${usedPrefix}on welcome_
┣  _${usedPrefix}off welcome_
┣  _${usedPrefix}ig *[lien]*_
┣  _${usedPrefix}tiktok *[lien]*_
┣  _${usedPrefix}wikipedia *[text]*_
┣  _${usedPrefix}google *[text]*_
┣  _${usedPrefix}imagen *[text]*_
┣  _${usedPrefix}play3 *[text]*_
┣  _${usedPrefix}invocar *[text]*_
┣  _${usedPrefix}ytsearch *[text]*_
┣  _${usedPrefix}getaud *[lien yt]*_
┣  _${usedPrefix}getvid *[lien yt]*_
┣  _${usedPrefix}toimg *[sticker]*_
┣  _${usedPrefix}tourl *[image]*_
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
