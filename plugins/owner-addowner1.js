let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `Siapa Yg Mau Di Jadiin owner Sayang?!`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `Mau Berapa Hari??`
    if (isNaN(txt)) return m.reply(`Hanya Nomor!\n\nExample:\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.ownerTime) user.ownerTime += jumlahHari
    else user.ownerTime = now + jumlahHari
user.owner = true
    m.reply(`Success
*Nama:* ${user.name}
*Selama:* ${txt} Hari`)
}
handler.help = ['addown']
handler.tags = ['rowner']
handler.command = /^(add|tambah|\+)o(wn)?$/i

handler.group = false
handler.rowner = true

export default handler