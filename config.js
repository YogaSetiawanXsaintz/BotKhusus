/**
 * Base By Qozho
 * Created On 22/2/2024
 * Contact Me on wa.me/6287819343311
 * Supported By Gpt Assistant 
 
 • Renovasi oleh ziyo
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner ========//
global.owner = '6287819343311'
global.nomerowner = ["6287819343311"]
// Apikey ======//
global.skizo = 'FalX'
//watermark ====//
global.packname = 'Di Buat Oleh Qozho'
global.author = 'Veemon -MD'
global.title = '⟡V E E M O N • M U L T I • D E V I C E⟡'
global.body = 'x ᴛʜᴇᴍᴇ ᴅɪɢɪ ᴇᴠᴏ - ᴠᴇʀ'
global.filename = 'Veemon MD - FDOC'
global.botname = 'Veemon - Md'
global.shinka = 'Veemon Jogress Shinka !'
global.idsaluran = 'https://whatsapp.com/channel/0029VanqPsCEFeXhWmSSis33'
global.namesaluran = 'Kiqo Genkk'
global.sourceurl = 'https://chat.whatsapp.com/DzicWkc9mpSIw9OAZVGAxH'
//setcode & logo ======//
global.tekspushkonv1 = ``
global.tekspushkonv2 = ``
global.tekspushkonv3 = ``
global.tekspushkonv4 = ``
global.setmenu = "v1"
global.setreply = "v1"
global.antibot = false
global.khas = '∨'
global.khasbawah = 'ꕤ'
global.khasmiring = '◦'
global.khasatas1 = '[ ⏤͟͟͞͞ '
global.khasatas2 = ' ͟͟͞͞⏤ ]'
global.footer = 'Kiqozho Official'
// cpanel ======//
global.domain = 'DOMAIN LU'
global.apikey2 = 'PLTA LU' // Isi Apikey Plta Lu
global.capikey2 = 'PLTC LU' // Isi Apikey Pltc Lu 
global.eggsnya = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location
//linode & d-o ==//
global.apilinode = ''// apikey akun vps linode
global.apitokendo = ''
//database ======//
global.urldb = ''; // kosongin aja 
global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg ==========//
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
