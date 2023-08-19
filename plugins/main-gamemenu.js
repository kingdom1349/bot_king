let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *Game Menu* 』
┃ ⬡ .caklontong
┃ ⬡ .family100
┃ ⬡ .iqtest
┃ ⬡ .math
┃ ⬡ .siapakahaku
┃ ⬡ .suit
┃ ⬡ .susunkata
┃ ⬡ .tebakanime
┃ ⬡ .tebakbendera
┃ ⬡ .tebakchara
┃ ⬡ .tebaksurah
┃ ⬡ .tekateki
┃ ⬡ .tebakkata
┃ ⬡ .tictactoe
┃ ⬡ .ttt
┃ ⬡ .fightkucing
┃ ⬡ .hunter
┃ ⬡ .attack
┃ ⬡ .atk
┃ ⬡ .war
╚━━━━━━━━━━━━✧
 _2023 © AsepMD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menugame']
handler.tags = ['main']
handler.command = /^(menugame)$/i

export default handler