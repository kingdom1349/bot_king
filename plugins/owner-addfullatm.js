let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah Uang yang akan diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let fullatm = poin
    let users = global.db.data.users
    if (users[m.sender].owner == true) {
    if (fullatm < 1000) throw 'Minimal 1000'
    if (fullatm > 1000) {
    users[who].fullatm += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} fullatm!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }}
    else {
    if (fullatm > 10000000000000) return m.reply(`Maks 1000`) 
    if (fullatm < 1000) return m.reply('Minimal 1') 
    if (fullatm < 100000000000000000000000000000000000000000000000000000000000000000000000) {
    users[who].fullatm += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} fullatm!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }}
   else {
   if (fullatm < .infinity) {
    users[who].fullatm += infinity
   
   conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan infinity fullatm!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }}
   
}

handler.help = ['addfullatm @user <amount>']
handler.tags = ['owner']
handler.command = /^addfullatm$/
handler.command = /^addfullatm .infinity$/
handler.rowner = true
handler.premium = false
handler.owner = false

export default handler
