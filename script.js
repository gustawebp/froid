var hora = new Date
var hora1= hora.getHours()
var min = new Date
var min1 = min.getMinutes()
var txt = document.getElementById('hor')
var txt1 = document.getElementById('hor1')
txt.innerHTML = ` ${hora1} horas e ${min1} minutos `

if (hora1 > 12) {txt1.innerHTML = 'Boa Tarde'}
if (hora1 > 1 && hora1 < 12 ) {txt1.innerHTML='Bom dia'}

if ( hora1 > 18 && hora1 < 24) { txt1.innerHTML = 'Boa noite'}
txt.innerHTML = `Agora são ${hora1} horas  e ${min1} minutos`