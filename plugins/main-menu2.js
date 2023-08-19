let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/212883841b1c73bafc92c.jpg'
let sewa = `👋🏻Halo Kak Namaku Adalah Susanti, Aku adalah Chat Bot WhatsApp yang di Program menggunakan NodeJs untuk menjadi Asisten Virtual Auto-Reply di WhatsApp.\n\n*言 menumain*\n*言 menuai*\n*言 menugroup*\n*言 menugame*\n*言 menurpg*\n*言 menustiker*\n*言 menumaker*\n*言 animanga*\n*言 menunsfw*\n*言 internet*\n*言 menudownload*\n*言 menutools*\n*言 islamic*\n*言 menuquotes*\n*言 random*\n*言 menuowner*\n\n_2023 © AsepMD_
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i

export default handler
