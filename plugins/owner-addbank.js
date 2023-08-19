let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah Uang yang akan diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let bank = poin
    let users = global.db.data.users
    if (users[m.sender].owner == true) {
    if (bank < 1000) throw 'Minimal 1000'
    if (bank > 1000) {
    users[who].bank += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} bank!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }}
    else {
    if (bank > 10000000000000) return m.reply(`Maks 1000`) 
    if (bank < 1000) return m.reply('Minimal 1') 
    if (bank < 100000000000000000000000000000000000000000000000000000000000000000000000) {
    users[who].bank += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} bank!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }}
   
}

handler.help = ['addbank @user <amount>']
handler.tags = ['owner']
handler.command = /^addbank$/
handler.rowner = true
handler.premium = false
handler.owner = false

export default handler
