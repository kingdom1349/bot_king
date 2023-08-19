let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah Uang yang akan diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let money = poin
    let users = global.db.data.users
    if (users[m.sender].owner == true) {
    if (money < 1000) throw 'Minimal 1000'
    if (money > 1000) {
    users[who].money += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} Money!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }}
    else {
    if (money > 10000000000000) return m.reply(`Maks 1000`) 
    if (money < 1000) return m.reply('Minimal 1') 
    if (money < 100000000000000000000000000000000000000000000000000000000000000000000000) {
    users[who].money += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} Money!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }}
   
}

handler.help = ['addmoney @user <amount>']
handler.tags = ['owner']
handler.command = /^addmoney$/
handler.rowner = true
handler.premium = false
handler.owner = false

export default handler
