var hora = new Date
var hora1= hora.getHours()
var min = new Date
var min1 = min.getMinutes()
var txt = document.getElementById('hor')
txt.innerHTML = ` ${hora1} horas e ${min1} minutos `