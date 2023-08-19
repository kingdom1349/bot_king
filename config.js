//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['62895613110306', '美Vynaa', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '62895613110306' //Ganti
global.packname = '© Sticker by Asep'
global.author = 'Asep-MD'
global.namebot = 'Aswp - MD'
global.wm = '© Asep MD By Asep134'
global.stickpack = '© Sticker by Asep'
global.stickauth = 'Asep-MD'
// Link Sosmed
global.sig = 'https://instagram.com/divis_killer'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/JDArSnK1PEdGESI9Hp0r3b'
// Donasi
global.psaweria = '-
global.ptrakterr = '-'
global.povo = '0895-6131-10306'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'j9XFN6zChx'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "j9XFN6zChx",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})