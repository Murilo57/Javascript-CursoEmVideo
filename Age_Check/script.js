function Checked() {
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById('txtano')
    var res = document.getElementById('div#res')
    if (fyear.value.lenght == 0 || fyear.value > year) {
    window.alert('[Error] check of dates and try again')
   } else {
       var fsex =   document.getElementsByName('radsex')
       var age  = year - Number(fyear.value)
       var gender = ''
       if (fsex[0].checked) {
        gender = 'Masculine'
       }else if (fsex[1].checked) {
        gender = 'Feminine'
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detected ${gender} with ${age} years`
   }
}
