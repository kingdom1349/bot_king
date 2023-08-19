let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *Quotes Menu* 』
┃ ⬡ .bacot
┃ ⬡ .bucin
┃ ⬡ .dare
┃ ⬡ .galau
┃ ⬡ .gombal
┃ ⬡ .hacker
┃ ⬡ .q-islam
┃ ⬡ .quotes
┃ ⬡ .katabijak
┃ ⬡ .motivasi
┃ ⬡ .pantun
┃ ⬡ .senja
┃ ⬡ .truth
┃ ⬡ .videoquotes
┃ ⬡ .videogalau
╚━━━━━━━━━━━━✧
 _2023 © AsepMD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menuquotes']
handler.tags = ['main']
handler.command = /^(menuquotes)$/i

export default handler